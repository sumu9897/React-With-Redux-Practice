import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "../redux/hooks";
import { Button } from "@/components/ui/button";
import QuizControls from "./QuizControls";
export default function Question() {
  const { questions,currentQuestionIndex } = useAppSelector((state) => state.quiz);
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          {/* <CardDescription>{currentQuestion}</CardDescription> */}
        </CardHeader>

        <CardContent>
          <div>
            {currentQuestion.options.map((option, index) => (
              <Button className="w-full mt-3" size={"lg"} key={index}>
                {option}
              </Button>
            ))}
          </div>
          <QuizControls></QuizControls>
        </CardContent>
      </Card>
    </div>
  );
}
