import Headd from "../components/Head";
import Footer from "../components/index/Footer";
import Navbar from "../components/index/Navbar";
import { Block } from "../components/Text";

export default function Parent(){
    return (
        <div className="min-h-screen">
            <Headd/>
            <div className="flex flex-col min-h-screen justify-between lg:h-screen">
                <div>
                    <Navbar/>
                    <div className="px-6 md:px-10 lg:px-32 xl:px-44 2xl:px-72 pb-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[60%] md:w-1/2 lg:w-[35%] mx-auto my-8 lg:my-16" viewBox="0 0 248 114">
                            <g id="Group_4167" data-name="Group 4167" transform="translate(-64 -162.007)">
                                <text id="For_Parents" data-name="For Parents" transform="translate(64 266.007)" font-size="44" font-family="FredokaOne-Regular, Fredoka One"><tspan x="0" y="0">For Parents</tspan></text>
                                <text id="_" data-name="👨‍👩‍👧‍👦" transform="translate(165.5 209.007)" font-size="44" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👨‍👩‍👧‍👦</tspan></text>
                            </g>
                        </svg>



                        <Block title="What is NGL?">
                            NGL is a fresh take on anonymity. Users post their “NGL link” on an Instagram story, and their followers can send anonymous messages to their NGL inbox in the app. We believe anonymity should provide a fun yet safe place to express your feelings and opinions without shame or judgement. In the current realm of social media, young people don’t have a space to share their feelings without judgement from friends or societal pressures. NGL provides this safe space for teens.
                        </Block>

                        <Block title="Is it safe?">
                            ‍The safety of the NGL community is of utmost importance to Team NGL. In fact, we have a whole page dedicated to helping you stay safe and sound while using NGL! As a result of our caution, we take various measures to keep our users safe, such as:We use world class AI content moderation that utilizes deep learning and rule-based character pattern-matching algorithms to filter out harmful language and bullying. Our algorithm can also detect the semantic meaning of emojis and our web scraper pulls specific examples of contextual emoji use. This means we stay on trend, we understand lingo, and we know how to filter out harmful messages. NGL is a fresh take on anonymity. Users post their “NGL link” on an Instagram story, and their followers can send anonymous messages to their NGL inbox in the app. We believe anonymity should provide a fun yet safe place to express your feelings and opinions without shame or judgement. In the current realm of social media, young people don’t have a space to share their feelings without judgement from friends or societal pressures. NGL provides this safe space for teens.
                            <br/><br/>
                            Our comprehensive Community Guidelines, Terms of Service, and Privacy Policy impose strict guidelines on the NGL community to keep our users out of harm’s way. Please report any harmful messages to our team, both using the app’s “Report” function and by reaching out to us at safety@nglapp.com.
                        </Block>

                        <Block title="How do I use NGL?">
                            ‍Social media has become dangerously inauthentic. Though the medium began as a way to allow people to publicly share their thoughts, feelings, and lives, it has recently become a contest of who can make their life seem the most perfect. NGL aims to strip away this veneer of inauthenticity and replace it with the freedom of anonymity, allowing our users to express themselves freely and truthfully without fear of judgement. If your child is using NGL, we promise that it’s not just another social media app cluttering up their phone; it’s a new means of expression for your child’s thoughts and feelings.
                            <br/><br/>
                            What if my child is being bullied on NGL?<br/>
                            ‍If your child is the target of bullying on NGL, we’re here for you and your family and can help you handle it in the best way possible. For starters, don’t engage with the bullies. No matter how much you may want to defend your child, the best response is a wall of silence. Then, take the following three steps with your child to recover their safety on NGL:
                            <br/><br/>
                            1. Block the sender - Bullying can be stopped in its tracks by simply blocking the sender of the harmful message on NGL.
                            <br/><br/>
                            2. Report the message to the NGL team - Reporting the message in the app allows us to improve our moderation system by identifying harmful words and sentiments, while also strengthening our community by identifying potentially harmful users. Make sure to take this measure to prevent others from experiencing bullying from the same culprit.
                            <br/><br/>
                            3. Delete the app for a few days - Sometimes, a break is necessary to properly recover. Help your child take appropriate action to recover from bullying.
                            <br/><br/>
                            4. Get help - Recovering from bullying is a daunting task, and it’s okay to ask for help throughout you or your child’s recovery.
                            <br/><br/>
                            Here are some helpful resources your family can use:
                            <br/><br/>
                            Pacer’s National Bullying Prevention CenterStopBullying.govBullying Recovery Resource Center
                            <br/><br/>
                            ‍I think my child needs help.
                            ‍NGL is all about being truthful and expressing yourself without shame or judgement. Asking for help is no different; there is nothing shameful or embarrassing about needing a little help from time to time. Here are some mental health resources for you and your child to look through together:
                            ‍Crisis Text Center - Text HOME to 741741 for 24/7 crisis counseling at your fingertips.
                            ‍988 Suicide & Crisis Lifeline - Call 988 anywhere in the U.S. for a 24/7 crisis hotline.
                            ‍SAMSHA.gov - 24/7 mental health counseling in both English and Spanish.

                            ‍I want to learn more about my child’s use of social media.
                            ‍With the growing importance of social media, it can be difficult to find resources like this page to understand where your family fits in the digital world. Here are some great resources to help you foster a sense of family in an ever-changing landscape:
                            ‍ConnectSafelyCommon Sense MediaFamily Online Safety Institute

                            ‍With ❤️ from Team NGL
                        </Block>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}