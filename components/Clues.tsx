import { useState } from "react"

const clues = [
    "What are the initials of your first & last name?",
    "What city are you from?",
    "Give your first name?",
    "What is your age?",
    "Which school do you or did you attend?",
]

// This function is a modal with a backdrop white background stuck at bottom center, half of the screen with on desktop and full screen on mobile using tailwind
// The function displays a list of clues
// each clue is a button that when clicked, it will display the clue in the input field to anwer the question in the clue with a back button to go back to the list of clues
// The function also has a button to close the modal
// each clue's button has a blue background and white text with a width of 90%

export default function Clues({handleClose, submitAnswer}:any){
    const [showClues, setShowClues] = useState(true)
    const [clue, setClue] = useState("")
    const [answer, setAnswer] = useState("")

    const handleShowClue = (clue: string) => {
        setClue(clue)
        setShowClues(false)
    }

    const handleCloseClue = () => {
        setClue("")
        setShowClues(true)
    }

    return (
        <>
            <div className="fixed inset-0 flex items-end justify-center bg-[rgba(0,0,0,0.4)]">
                <div className="bg-gray-50 relative rounded-t-2xl w-full pt-4 pb-5 lg:w-[40%] max-w-[651px] flex flex-col items-center justify-center">
                    <button onClick={handleClose} className="p-2 absolute top-1 right-1">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 0C6.2 0 0 6.2 0 14C0 21.8 6.2 28 14 28C21.8 28 28 21.8 28 14C28 6.2 21.8 0 14 0ZM19.4 21L14 15.6L8.6 21L7 19.4L12.4 14L7 8.6L8.6 7L14 12.4L19.4 7L21 8.6L15.6 14L21 19.4L19.4 21Z" fill="black"/>
                        </svg>
                    </button>
                    {showClues && (
                        <>
                            <div className="flex flex-col items-center py-3 gap-1">
                                <h1 className="font-fredoka text-[14px] leading-[14px]">Answer one clue you wish to add</h1>
                                <span className="font-fredoka text-[27px] leading-[27px]">Tap to answer the clue</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                {clues.map((clue, index) => (
                                    <button onClick={() => handleShowClue(clue)} className="bg-blue-500 text-white text-[18px] 2xl:text-[22px] w-[90%] p-5 my-1 rounded-lg" key={index}>{clue}</button>
                                ))}
                            </div>
                        </>
                    )}
                    {!!clue && (
                        <>
                            <div className="flex flex-col items-center py-3 gap-1">
                                <h1 className="font-fredoka text-[14px] leading-[14px]">one clue you wish to add</h1>
                                <span className="font-fredoka text-[27px] leading-[27px]">Give your answer</span>
                            </div>
                            <button onClick={handleCloseClue} className="p-2 absolute top-1 left-1">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 28C11.2311 28 8.52431 27.1789 6.22202 25.6406C3.91973 24.1022 2.12532 21.9157 1.06569 19.3576C0.006066 16.7994 -0.271181 13.9845 0.269012 11.2687C0.809205 8.55301 2.14258 6.05845 4.10051 4.10051C6.05845 2.14258 8.55301 0.809205 11.2687 0.269012C13.9845 -0.271181 16.7994 0.006066 19.3576 1.06569C21.9157 2.12532 24.1022 3.91973 25.6406 6.22202C27.1789 8.52431 28 11.2311 28 14C28 15.8385 27.6379 17.659 26.9343 19.3576C26.2307 21.0561 25.1995 22.5995 23.8995 23.8995C22.5995 25.1995 21.0561 26.2307 19.3576 26.9343C17.659 27.6379 15.8385 28 14 28ZM20.5483 11.5145H14V7.51334C14.0002 7.37915 13.9606 7.24791 13.8862 7.13626C13.8118 7.02461 13.7058 6.93757 13.5819 6.88619C13.4579 6.8348 13.3215 6.82138 13.1899 6.84763C13.0583 6.87387 12.9374 6.9386 12.8427 7.03361L6.39054 13.5203C6.3275 13.5827 6.27745 13.657 6.2433 13.7388C6.20914 13.8207 6.19156 13.9085 6.19156 13.9972C6.19156 14.0859 6.20914 14.1737 6.2433 14.2556C6.27745 14.3375 6.3275 14.4117 6.39054 14.4741L12.8427 20.9608C12.9374 21.0558 13.0583 21.1205 13.1899 21.1468C13.3215 21.173 13.4579 21.1596 13.5819 21.1082C13.7058 21.0568 13.8118 20.9698 13.8862 20.8581C13.9606 20.7465 14.0002 20.6153 14 20.4811V16.4836H20.5483C20.7267 16.4819 20.8973 16.4101 21.0232 16.2836C21.1491 16.1572 21.2202 15.9863 21.2212 15.8079V12.1931C21.221 12.0142 21.1502 11.8425 21.0242 11.7155C20.8982 11.5885 20.7272 11.5163 20.5483 11.5145Z" fill="black"/>
                                </svg>
                            </button>
                            <div className="h-[px] py-4 px-5 w-[90%] rounded-2xl bg-[#1795F8] mt-12 mb-5">
                                <p className="text-white font-fredoka text-[18px] 2xl:text-[22px]">{clue}</p>
                                <textarea onChange={(e)=>setAnswer(e.target.value)} value={answer} className="h-[100px] outline-none text-white text-[15px] 2xl:text-[18px] rounded-lg bg-transparent placeholder-[#67BCFF]" placeholder="Add your answer" />
                            </div>
                            <button 
                                onClick={()=>{
                                    if(!!answer) submitAnswer(answer)
                                }} 
                                className="text-white bg-black w-[90%] mb-12 text-[18px] 2xl:text-[22px] rounded-full py-2"
                            >
                                Add Clue
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

