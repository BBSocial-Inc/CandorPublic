import Head from "next/head";
import styles from "../../styles/Upvote.module.scss";
import { request, gql } from "graphql-request";
import Headd from "../../components/Head";

export default function Home({ data }: any) {
  return (
    <>
      <Headd/>
      <main className={styles.main}>
        <div className={styles.top}>
          <div className={styles.inputcon}>
            <text className={styles.text2}>{data?.Poll?.text}</text>
          </div>
          <text className={styles.text3}>
            {data?.Poll?.submitted_by?.name} needs your help to update
            <br />
            this question as game in Candor
          </text>
        </div>

        <div className={styles.bottom}>
          <text className={styles.text4}>
            👇3740 people just tapped the button 👇
          </text>
          <div className={styles.button}>Upvote this poll in Candor</div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const pid = context.query.id;
  const query = gql`
    query Poll($pollId: String!) {
      Poll(id: $pollId) {
        _id
        brag_name
        submitted_by {
          name
        }
        text
      }
    }
  `;

  const variables = {
    pollId: pid.toString(),
  };

  const res = await request(
    "https://api.candour.app/graphql",
    query,
    variables
  );
  const data = res;

  return { props: { data: data ? data : {} } };
}
