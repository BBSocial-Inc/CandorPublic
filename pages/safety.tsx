import Headd from "../components/Head";
import Footer from "../components/index/Footer";
import Navbar from "../components/index/Navbar";
import { Block, Indent } from "../components/Text";

export default function Safety() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Headd />
      <div className="flex flex-col min-h-screen overflow-y-scroll justify-between lg:h-screen">
        <div>
          <Navbar />
          <div className="px-6 md:px-10 lg:px-32 xl:px-44 2xl:px-72 pb-12">
            
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[60%] md:w-1/2 lg:w-[35%] mx-auto my-8 lg:my-16" viewBox="0 0 805 241">
              <text id="Safety_Guidelines" data-name="Safety Guidelines" transform="translate(0 218)" font-size="95" font-family="FredokaOne-Regular, Fredoka One"><tspan x="0" y="0">Safety Guidelines</tspan></text>
              <text id="_" data-name="🔒" transform="translate(348 103)" font-size="95" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🔒</tspan></text>
            </svg>


            <Block title="SAFETY - For all stakeholders (Users, Parents and Schools)">
              <br/>
              Candor is an anonymous messaging and friendship app designed for users to communicate with one another without revealing their identities. Our goal is to provide a safe and secure platform for users to share their thoughts, feelings, and experiences without fear of judgment or retaliation. Here&apos;s what you need to know about using Candor safely.
            </Block>
            <Block title="Guiding Principles:">
              <Indent>
                <br/>• &nbsp; At Candor, we believe in fostering a positive and inclusive community. Users are expected to treat one another with respect and kindness.
                <br/>• &nbsp; Have fun and enjoy the games, but keep in mind that any form of bullying or harassment will not be tolerated.
                <br/>• &nbsp; If you come across any messages or users that violate our community guidelines, please report it to our team.
              </Indent>
            </Block>
            <Block title="Blocking & Reporting:">
              <Indent>
                <br/>• &nbsp; Candor provides an easy-to-use blocking feature which allows you to block any user who makes you feel uncomfortable. This will prevent them from messaging you in the future.
                <br/>• &nbsp; Our team reviews all blocked messages and take necessary action to ensure the safety and well-being of our users.
              </Indent>
            </Block>
            <Block title="Anonymity:">
              <Indent>
                <br/>• &nbsp; Candor is designed to allow users to communicate anonymously, but please keep in mind that nothing on the internet is truly anonymous.
                <br/>• &nbsp; Be mindful of the information you share and be cautious when sharing personal information.
              </Indent>
            </Block>
            <Block title="Playing with Friends:">
              <Indent>
                <br/>• &nbsp; Candor is best enjoyed with friends, so we recommend only playing with people you trust.
                <br/>• &nbsp; If you come across any suspicious activity or behavior, please report it to our team immediately.
              </Indent>
            </Block>
            <Block title="Bullying and Harassment:">
              <Indent>
                <br/>• &nbsp; Bullying and harassment will not be tolerated on Candor. If you experience or witness any form of bullying or harassment, please report it to our team and block the user.
                <br/>• &nbsp; Remember that you can always talk to a trusted adult if you need additional support.
              </Indent>
            </Block>
            <Block title="Age Limit:">
              <Indent>
                <br/>• &nbsp; Candor is intended for users aged 12 and above. If you have a child under 12 who is using Candor, please reach out to us with their display name and verification of your relationship.
              </Indent>
            </Block>
            </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
