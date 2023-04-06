$(document).ready(function(){
     correct = ["Russia", "Brazil", "Iga Swiatek", "Rafael Nadal", "Gomennasai", "Friends", "Stolypin", "Daniel Ricciardo", "Dr.Dre", "7"];
     questions = ["Q1. Which country has annexed Crimean peninsula in 2014?", "Q2. In which country did the biggest corruption case 'Operation Petrobras' happened?", "Q3. Which female tennis player won French Open in 2022?", "Q4. Who is the male tennis player called as 'King of the Clay?","Q5. How to say 'sorry' in Japanese?", "Q6. Which sitcom has a plot of 6 people living in New York?", "Q7. Who is the Russian statesman who sent Russian peasants to Kazakh lands?", "Q8. Who is popular Australian Formula 1 driver?", "Q9. Under whose agency or with whom Eminem worked in his prime beginning career?", "Q10. In which season Michael leave in the 'Office' series?"];
     choice_options = [["Russia","Australia","Poland","Germany"], ["Brazil", "Russia", "Hungary", "Kazakhstan"], ["Coco Gauff", "Iga Swiatek", "Maria Sakkari", "Elena Rybakina"], ["Novak Djokovic", "Carlos Alcaraz", "Daniil Medvedev", "Rafael Nadal"], ["Sumimasen", "Gomennasai", "Arigato", "Kudasai"], ["Friends", "Modern Family", "Brooklyn 99", "Sex and the City"], ["Stolypin", "Milyutin", "Tatishev", "Goloshchekin"], ["Daniel Ricciardo", "Marcus Ericsson", "Pierre Gasly", "Charles Leclerc"], ["Snoop Dogg", "Dr. Dre", "50 Cent", "None of the above"], ["8", "11", "7", "9"]];
     
     // Generate quiz questions
     // ...
     
     //let quizBox = document.getElementById ("quiz-box"); // JS way
     quizBox = $("#quiz-box"); // Jquery
     function generatefunc() {
         for (let i = 0; i < questions.length; i++) {
            quizBox.append ("<div class='question"+i+"'>"); 
            $('.question'+i).append ("<p class='d'> "+questions[i]+"</p>");
            $('.question'+i).append ("<label><input type='radio' name='q"+i+"' value='"+choice_options[i][0]+"'>"+choice_options[i][0]+"</label>")
            $('.question'+i).append ("<label><input type='radio' name='q"+i+"' value='"+choice_options[i][1]+"'>"+choice_options[i][1]+"</label>")
            $('.question'+i).append ("<label><input type='radio' name='q"+i+"' value='"+choice_options[i][2]+"'>"+choice_options[i][2]+"</label>")
            $('.question'+i).append ("<label><input type='radio' name='q"+i+"' value='"+choice_options[i][3]+"'>"+choice_options[i][3]+"</label>")
         }

     }
 
     generatefunc();
 
     $("button").click(function() {
          let countCorrect = 0;
          
          // Check answers
          for (let i = 0; i < questions.length; i++) {
            let selected = $("input[name='q" + i + "']:checked").val();
            if (selected === correct[i]) {
              countCorrect++;
            }
          }
          
          // To update with the latest score
          let latestScore = countCorrect;
          // To not repeat the "Results of the quiz" several times
          quizBox.find("h2").remove();
          // To display the overall score 
          quizBox.append("<h2>Result of the quiz is: " + latestScore + " out of " + questions.length + "</h2>");
     });
});

