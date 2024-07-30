import React from "react";

const DashBoard = ({ user }) => {
  return (
    <div className="flex flex-col gap-10 w-[70vw] items-center">
      <div>
        <h1> Hi, {user.name}!</h1>
        <p>
          Your current score is {user.score} with a rank of {user.rank}
        </p>
      </div>
      <div className="flex gap-10">
        <div>
          <p>
            this is going to have all the data pertaining to the users history
            with the app, like the amount of qizzes they've completed{" "}
            {user.quizHistory.length} and a link to the quiz page. It will need
            to look really pretty!
          </p>
        </div>
        <div>
          <p>
            this is going to have all the data pertaining to the users flash
            cards which i havent implement yet with the app, like the amount of
            qizzes they've completed {user.quizHistory.length} and a link to the
            quiz page. It will need to look really pretty!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
