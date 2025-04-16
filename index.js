// WEEK 4 ASSIGNMENT: Loops | Conditionals | Logical Operators | Functions

// 1. JAMB-style score checker
function checkJambScore(score) {
    if (score >= 180) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  }
  
  // Voter eligibility checker
  function checkVotingEligibility(age) {
    if (age >= 18) {
      return "You are eligible to vote";
    } else {
      return "Not eligible";
    }
  }
  
  // Grading system
  function gradeStudent(name, score) {
    if (score >= 90) {
      return "Excellent";
    } else if (score >= 75) {
      return "Good";
    } else if (score >= 50) {
      return "Average";
    } else {
      return "Fail";
    }
  }
  
  // Access check based on ID and age
  function checkAccess(hasID, isAbove18) {
    if (hasID && isAbove18) {
      return "Access granted";
    } else {
      return "Access denied";
    }
  }
  
  // Loop through student scores
  function evaluateScores(scores) {
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] > 50) {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    }
  }
  
  // Arrow function for Math and English pass check
  const didPassBoth = (math, english) => (math >= 50 && english >= 50) ? "Yes" : "No";
  
  // Signup check for email or phone number
  function canSignUp(email, phone) {
    if (email || phone) {
      return "Proceed to sign up";
    } else {
      return "Provide email or phone number";
    }
  }
  
  // Username and password validation
  function validateLogin(username, password) {
    if (!username || !password) {
      return "Invalid input";
    } else {
      return "Login successful";
    }
  }
  
  // Check for full-time or part-time using ternary operator
  function checkWorkStatus(hoursWorked) {
    return hoursWorked >= 40 ? "Full-time" : "Part-time";
  }
  
  // Arrow function to return larger number
  const getLargerNumber = (num1, num2) => (num1 > num2 ? num1 : num2);
  