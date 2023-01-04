import Head from "next/head";
import styles from "../styles/Response.module.scss";
import { useEffect, useState } from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";
import { SEND_MESSAGE } from "../graphql/mutation";
import JSConfetti from "js-confetti";

export default function Home({ data }: any) {
  const card = data?.Card;

  const [showModal, setShowModal] = useState(false);
  const [onFocus, setonFocus] = useState(false);
  const [response, setresponse] = useState<string | null>(null);
  const [userMeta, setuserMeta] = useState<any>(null);
  const [loading, setloading] = useState<any>(false);
  const [userId, setuserId] = useState<any>(false);

  const router = useRouter();
  const { id, cid } = router.query;

  useEffect(() => {
    const api = "https://ipinfo.io/json?token=e798cd32704c2c";

    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setuserMeta(data);
      });

    var userId_ = localStorage.getItem("user_special_id");
    if (userId_) {
      setuserId(userId_);
    } else {
      setuserId("12345");
    }
  }, []);

  const endpoint = "https://api.candour.app/graphql";

  const graphQLClient = new GraphQLClient(endpoint);

  const variables = {
    cardId: cid,
    username: id,
    question: card?.caption_text,
    temporarySenderUserId: userId,
    ipAddress: userMeta?.ip,
    networkProvider: userMeta?.org,
    browserName: "null",
    countryName: userMeta?.contry + " - " + userMeta?.city,
    approxLocation: userMeta?.region,
    answerText: response,
  };

  console.log(variables);

  const handleSend = async () => {
    console.log(variables);
    const jsConfetti = new JSConfetti();

    setloading(true);
    try {
      const data = await graphQLClient.request(SEND_MESSAGE, variables);

      if (data) {
        jsConfetti.addConfetti();
        setloading(false);
        setShowModal(true);
        setresponse(null);
      }
      // console.log(JSON.stringify(data, undefined, 2));
    } catch (error: any) {
      setloading(false);
      alert(error?.message);
      // console.error(JSON.stringify(error, undefined, 2));
    }
  };

  return (
    <>
      <Head>
        <title>Candor - Only Truths, No Lies!</title>
        <meta name="description" content={`Send anonymous message to ${id}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>

      <main
        style={{
          background: card?.background_color,
        }}
        className={styles.main}
      >
        <div className={styles.top}>
          <div className={styles.inputcon}>
            <div className={styles.texts}>
              <text className={styles.text1}>{id} Anonymous inbox</text>
              <text className={styles.text2}>{card?.caption_text}</text>
            </div>
            <div className={styles.input}>
              <textarea
                onChange={(txt: any) => {
                  setresponse(txt.target.value);
                }}
                placeholder="Send me an anonymous message"
                onFocus={() => setonFocus(true)}
                onBlur={() => {
                  if (!response) {
                    setonFocus(false);
                  }
                }}
              />
            </div>
          </div>
          <text
            style={{
              color: card?.background_color ? "rgba(0,0,0,0.5)" : "#856703",
            }}
            className={styles.text3}
          >
            🔒Complete anonymous. Created from Candor App
          </text>

          {onFocus && (
            <div onClick={handleSend} className={styles.button}>
              {loading ? "Loading" : "Send"}
            </div>
          )}
        </div>

        {!onFocus && (
          <div className={styles.bottom}>
            <text
              style={{
                color: card?.background_color ? "rgba(0,0,0,0.5)" : "#856703",
              }}
              className={styles.text4}
            >
              👇3740 people just tapped the button 👇
            </text>
            <div
              // onClick={handleSend}
              className={styles.button}
            >
              {"Get your own messages!"}
            </div>
          </div>
        )}
      </main>

      {showModal && (
        <div className={styles.modalcon}>
          <div className={styles.ad}>Ad Section</div>
          <div
            style={{
              background: card?.background_color,
            }}
            className={styles.modal}
          >
            <div className={styles.center}>
              <text className={styles.emoji}>🤩</text>
              <text
                style={{
                  color: card?.background_color ? "rgba(0,0,0,0.5)" : "#856703",
                }}
                className={styles.emojitext}
              >
                Sent!
              </text>
            </div>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
              className={styles.center}
            >
              <text
                style={{
                  color: "#fff",
                }}
                className={styles.emojitext}
              >
                👇3740 people just tapped the button 👇
              </text>
              <div className={styles.button2}>Get your own messages!</div>
            </div>
            <div className={styles.center}>
              <text
                style={{
                  color: "#000",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                className={styles.emojitext}
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Send another message
              </text>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const pid = context.query.cid;
  const query = gql`
    query Card($cardId: String!) {
      Card(id: $cardId) {
        _id
        background_color
        caption_image
        caption_text
        is_activated
        text_color
        description
      }
    }
  `;

  const variables = {
    cardId: pid.toString(),
  };

  const res = await request(
    "https://api.candour.app/graphql",
    query,
    variables
  );
  const data = res;

  return { props: { data: data ? data : {} } };
}
