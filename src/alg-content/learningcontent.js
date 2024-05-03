//alg learning
import QuickSortLearning from "./quicksortLearning";
import BubbleSortLearning from "./bubblesortLearning";

export const LearningSection = () => {

    // returns all the learning content
    return (
        <div className='learning-section'>
            <h1>
                Learn More About:
            </h1>
            <div className = 'alg-learning'>
                <BubbleSortLearning/>
                <QuickSortLearning/>
            </div>
        </div>
        
    );



}

