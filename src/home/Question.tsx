import {useAppSelector} from "../redux/hooks"
export default function Question() {
    const {question} = useAppSelector((state) => state.quiz)
    console.log(question);
  return (
    <div>
      Question
    </div>
  )
}
