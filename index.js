var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Welcome to REST API"));

const q1 = [
  "Welcome to CloudCounselage bot, Please select your query",
  "1.General IP Queries",
  "2.Learning Path 1 ",
  "3.Learning Path 2",
  "4.Learning Path 3",
  "5.Live Projects",
];

const q12 = [
  "0.Exit",
  "1.IP Start Date for LP1",
  "2.IP End Date for LP1",
  "3.Prerequisites",
  "4.Eligibility",
  "5.Which Browser I should use?",
];

const q13 = [
  "0.Exit",
  "1.IP Start Date for LP2",
  "2.IP End Date for LP2",
  "3.Prerequisites",
  "4.Eligibility",
  "5.Which Browser I should use?",
];

const q14 = [
  "0.Exit",
  "1.IP Start Date for LP3",
  "2.IP End Date for LP3",
  "3.Prerequisites",
  "4.Eligibility",
  "5.Which Browser I should use?",
];

const q15 = [
  "0.Exit",
  "1.IP Start Date for Live project",
  "2.IP End Date for Live project",
  "3.Prerequisites",
  "4.Eligibility",
  "5.Which Browser I should use?",
];

const q11 = [
  "0.Exit",
  "1.I m not able to access my Bitrix24 account?",
  "2.What is the job profile? Will we be able to work only in the tech we have chosen for the internship?",
  "3.How many workgroups will an intern be a part of?/ How many workgroups should I be in?",
  "4.Not able to access the LP1 page with my token/ When I put my token it redirects me to the home page/ Getting error while accessing the page- User Not Found/Website Redirection Issue/Tokens not working.?",
  "5.Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content?",
  "6.I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do?/ Tokens not working",
  "7.I did follow the instructions given in the video, but still, I'm not able to log in for the LP1 task",
  "8.Do I need to pass with the certificate in training.",
  "9.What do we do in the work report?",
  "10.I tried it 3-4 times and have to enter token each time I visit it.",
  "11.I just joined the group and I am not understanding what to do further.How do I start my internship?",
  "12. What do I do after completing the quiz? how to complete the entire lp1",
  "13. Do I need to register every time I do different tasks of lp1",
  "14. I have complete one training, I didn't find any options to continue my training.",
  "15. I am not getting results of the training.",
  "16. Unable to access the quiz",
  "17. What to do after completing LP1/ LP2/ LP3?",
  "18. Which Browser I should use?",
  "19. Do we need to complete all the six steps within 14 hours as you mentioned that we have to complete all the 6 steps within 2 weeks so it becomes 14 hours?",
  "20. I had press finished button of LP1 task but want to resume the task, how to do that?",
  "21. The web pages on mobile are not showing properly.",
  "22. I have opted for a blockchain internship, can I also learn about AI and do an internship in both?",
  "23. Can I switch my technology now? / I had enrolled for two technologies at the time of form-filling and got selected for the technology I’m not interested in.",
  "24.Can you help me by telling how can I get to know about my progress of LP 1",
  "25. I am not able to view a page/ I am logged in the training and still the website asks me to login",
  "26. I am having trouble finding the workgroup ( no workgroup is visible)",
  "27. I am not added into my technology workgroup./ actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page",
  "28. When does the LP1/ LP2/ LP3 begin dates and deadline/ end date?",
  "29. What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level?",
  "30. What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level?",
  "31. What to do after LP3?",
  "32. Can we skip any training if we are already clear with the basics?",
  "33. Is it ok to clock-out before an hour is completed if the tasks are completed? Do we need to clock-in and compulsorily complete 7 hours a week even if the tasks are completed?",
  "34. Resource links not working. What to do? Should we skip?",
  "35.What to do when our university exams start?",
  "36. Is it okay to mention this internship as ongoing for college records?",
  "37. Can we do another internship with IP?",
  "38. What to do after Live Projects? Are we getting an offer letter/Stipend?",
  "39. When will we get a joining letter?",
  "40. When will we get an internship completion letter?",
  "41. What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects?",
  "42. Not able to see the task as not part of the IP workgroup.",
  "43. Live Project/ LP3 has to be submitted individually or it will be a group project?",
  "44. How can we check our weekly hours?",
  "45. Is it necessary to attend LP1 for other domains as well if we want to take its training.",
  "46. Why only this training for LP2?",
  "47. Could I have done this training from other websites/ resources?",
  "48. Can I do certification for the training provided in LP2?",
  "49. The videos of LP2 are taking too much time to load.",
  "50. Are LP1/ LP2/ LP3 a part of the Live Project?",
  "51. Will these training be enough for us to complete the LP3 and Live Project.",
  "52. How do I access my quiz?",
  "53. By when will we receive access to Bitrix24?",
  "54. Can my friends still apply for the Internship Program (IP) - Maharashtra? Can we create awareness about this internship? Can we be the representative for Cloud Counselage in our college?",
  "55. Is the induction online or offline?",
  "56. I am trying to complete social media tasks. I completed that day and clicked finish but it didn't show finished in the task menu. What should I do?",
  "57. My Efficiency is 0% what should I do?",
  "58. Will you provide mentorship or doubt clearing sessions in this internship?",
  "59. Problem statements of the Live Project will be chosen by the intern or will be provided by Cloud Counselage?",
  "60. Can we be a part of your future development team?/ Can we be hired by Cloud Counselage after this internship?",
  "61. Can we visit the office? How many times do we have to visit the office for this internship?",
  "62. Can we extend this internship?",
  "63. If we are working on more than one technology, are those technologies added to the certificate?",
  "64. Will Live Projects have only one technology or a mixture of technologies?",
  "65. I forgot to clock in for a few days, will this affect my internship?",
  "66. Will I get LP3 and Live project of technology other than what I am selected for?",
  "67. I have not been added to the technology I preferred to work on?",
  "68. What are the company policies for IP interns?",
  "69. I have not got the acknowledgment from you regarding the weekly report.",
  "70. In my work time I can see one exclamation mark?/ What does the remaining time mean?",
  "71. I could not attend the induction last time, can I get an online induction again?/ I want some points said in the introduction, where can I get them.",
  "72. Can I just finish the task that you have just uploaded as I have attended the live induction session on 22nd of march",
  "73. I have got another attachment called ‘noname’ or ‘win.dat’ with my Appointment letter, what should I do about it? Will it cause any harm?",
  "74. Where do we push the code in LP3?",
  "75. Where should we share our hacker rank id/ where should we share the link/ anything relate to LP3 assignment submission?",
  "76. When will my review on social media update task be done?",
  "77. Live project's use case will be provided or can we have our own use case?",
  "78. Is it necessary to clock-in if I am done with my tasks?",
  "79. Can we be online after 1 hr in a day?",
  "80. I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?",
  "81. One of my friends had applied for the IP but she didn't receive any further updates.",
  "82. I have a query with respect to LP3, what should I do and whom should I ask?",
  "83. I didn't get my appointment letter yet.",
  "84. For some reason, I'm unable to download my LP3 assignment problem statement document shared on LP3 page, is there any other way I can get it?",
  "85. If my technology is IOT/ AI/ ML/ etc., do I still have to complete the mandatory training for LP1 Cloud Computing?",
  "86. I am getting an error:: Exception: SQLSTATE[HY000]: General error: 1 no such table: layout, what should I do?",
];

const q111 = [
  "Go to https://cloudcounselage24.bitrix24.com/ On the Login page, In the,‘Enter the phone number or email’, type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’. In case the problem persists, please write a mail to hrsupport@cloudcounselage.in",
];
const q112 = [
  "Your job profile is 'Technology - Intern'; if you're in cloud computing technology to update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'. Yes, you'll only work in the technology you're selected for but you can take the training of other technologies.",
];
const q113 = [
  "Every intern should be a part of 2 workgroups.1. 202003-IP -- This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup. 2. 202003-IP-Technology -- This is a technology-specific workgroup. You'll be added to the technology you had enrolled for. For example 202003-IP-Python for students who enrolled for python. If anyone has not been added to any of these workgroups, kindly message Cloud Counselage HR regarding the same over bitrix24 platform.",
];
const q114 = [
  "Please watch the videos shared with the invite and you should not face any problems in accessing the training. Please follow the protocol shown in the videos.",
];
const q115 = [
  "Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you'll have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode.",
];
const q116 = [
  "For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode.",
];
const q117 = ["Ensure you're using the right token"];
const q118 = ["No, but please ensure you complete the training."];
const q119 = [
  "Please remove the default In Progress from your filter of the task section and try.",
];
const q1110 = [
  "As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on send to supervisor.",
];
const q1111 = [
  "We understand that it sometimes becomes tedious to access the training and we highly appreciate your support in making the training possible. We only do this for security reasons and we're trying to find a way to minimise the token use. For now, please note that in LP1 there are 3 types tokens:  1. One for each technology, you're a part of. 2. The lp1 home page. 3. The 6 tokens (one for each step)",
];
const q1112 = [
  "Please go through the mail from which you have accepted the invite and check the task section as well.",
];
const q1113 = [
  "There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it. If you are done with LP3 please wait for Live Projects to begin.",
];
const q1114 = [
  "There are codes in the LP1 assignment, and each time you have to register also, please check your task description.",
];
const q1115 = [
  "Go back to the technology Page. Enter the respective tokens and then work. follow the same process every time.",
];
const q1116 = [
  "They are just for your practice and not for our record, so you don't need the results of LP1 and LP2 training.",
];
const q1117 = ["Please retry after some time in an incognito window"];

const q1118 = [
  "Mark your task as finished and wait for the next instructions.",
];
const q1119 = ["Google Chrome is recommended."];

const q1120 = [
  "It's preferred if you complete the LP1 training in 2 weeks but not mandatory.LP1, LP2, and LP3 are expected to be completed before the live projects start in July; but that doesn't mean you should give anything less than 1 hour a day or 7 hours a week towards the learning paths (LP).",
];

const q1121 = [
  "They are purposefully only configured for Desktops/ Laptops. In an emergency, you can use the show as desktop mode of your browser.",
];

const q1122 = [
  "You can learn both the technologies using Learning Path 2 (LP2) which will begin after the 2nd week of March, but your internship will only be continuing with the one you are selected for.",
];

const q1123 = [
  "You cannot switch the technology currently. You have to continue with the one you are selected for. In the case of multiple form entries, you just got selected for one of them; the first one that you entered. You cannot make a switch right now.",
];

const q1124 = [
  "There is no metric to score your progress in any learning paths as it will be at a different pace for every individual.",
];

const q1125 = [
  "This could be because of some issue in the cookies or extension in your browser. Please try again with a different browser or open the tab with incognito mode. Also, you don't need to record your results, the quizzes are only for your knowledge check and not a metric to score you.",
];

const q1126 = [
  "Please ensure that you have connected to the drive of that workgroup by going to your notification and connecting to the drive of that workgroup. If that is done, please try to search for your workgroup in the search bar at the top of your screen.To search, use the keywords, 202003-IP-TechnologyName. Ex 202003-IPDevOps. In case there is no invitation to you, please message Cloud Counselage HR. You will be added to 2 groups “202003-IP” which is a general workgroup and the other one is “202003-IP-Technology” which is a technology-specific workgroup.",
];
const q1127 = [
  "Please follow the instructions given in the videos or the one in the Bitrix24 mail(these are the same videos share in the task), the tokens are given to you. Ensure that you are putting the right token on the right page.",
];

const q1128 = [
  "The dates to begin the learning paths (LP) are: LP1 - 01/03/2020 LP2 - 18/03/2020 LP3 - 02/04/2020 All learning Paths (LP) are expected to be completed by the interns before the first week of June as Live Projects will begin in that time frame.",
];

const q1129 = [
  "The main focus of LP2 is to provide you with a basic foundation of the technology you're interested in. The training is also handpicked in such a way that they enable you to work on LP3 assignments which interim gives you the beginning to start your study for the selected technology and in no terms is the only/ final training you should look into. Please keep learning after your LP2 is complete, that is the only way to grow in your technology of choice.",
];

const q1130 = [
  "LP3 will be assignment based and its execution and content vary from technology to technology. This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers.",
];

const q1131 = [
  "You'll be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June.",
];

const q1132 = [
  "No, these pieces of training will cover basics and there is no harm in brushing up your skills before you start with the assignments later.",
];

const q1133 = [
  "If the tasks are completed, there is no need to clock-in and clock-out unnecessarily for hours. However, you should keep a track of all the updates of the internship being posted on the groups.",
];

const q1134 = [
  "Please do not skip any piece of training, in case you're not able to access any link please message to Cloud Counselage HR and drop an email to hrsupport@cloudcounselage.in regarding the same.",
];

const q1135 = [
  "We have provided our interns with preparatory leave from the exam season, nevertheless, you are free to work on your LP3 assignment, but we suggest to concentrate on your exams first.",
];

const q1136 = [
  "Yes, we'll provide every intern a joining letter as soon as all interns are inducted.",
];

const q1137 = [
  "Yes, you can do another internship outside of Cloud Counselage but please ensure to provide 1 hour a day or 7 hours a week for IP.",
];

const q1138 = [
  "Submit your project and once it's reviewed as successful, collect your internship letter. Your internship is complete after this. There is no stipend for live projects.If your work is sublime and we have a vacancy in the position you're interested in,you may be offered a chance for interviews and can get an offer letter from CloudCounselage Pvt. Ltd.",
];

const q1139 = [
  "Joining letter to all the interns will be provided on or before the 31st of March 2020.",
];

const q1140 = [
  "This is a three (3) month internship conducted in the month of March, June & July 2020. You will receive your internship experience letter in August during the convocation only if you successfully submit your Live Project.",
];

const q1141 = [
  "Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage. The actual problem statements will only be given when the LP3/ Live Project phase is in progress to keep the interns focused on LP1/ LP2.",
];

const q1142 = ["Please message ‘Cloud Counselage HR’ in Bitrix24"];

const q1143 = ["All the LP3/ Live Projects are on an individual scale."];

const q1144 = [
  "In the menu select 'time and reports' ->worktime and then you could see your worktime or click on this link once you’re logged in to Bitrix24; https://cloudcounselage24.bitrix24.com/timeman/timeman.php",
];

const q1145 = ["LP1 training is common across all the technologies"];

const q1146 = [
  "They are our training partners and we have handpicked this training to cover a certain topic for you. These training cover from the very basic to intermediate level and is the perfect medium for you to have a starting point.",
];

const q1147 = [
  "Yes, you could have but the reason to have these videos is to keep an enclosed environment for you to watch these tutorials without distractions with quizzes and forums for you to discuss in. As mentioned earlier, our main aim is to provide you with a starting point and baseline for the technology of your choice.",
];

const q1148 = [
  "Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the advantage of the corporate benefits at 'no profit no loss' basis for Cloud Counselage, that we receive from the partnership. Being our interns, you can get huge discounts on the certifications you choose to enrol for through Cloud Counselage and Edureka. In case you want to know more about the discounts offered, please reach out to ‘Cloud Counselage HR’ or write to hrsupport@cloudcounselage.in.",
];

const q1149 = [
  "We have uploaded the videos of the highest quality and best resolution which has resulted in some videos being over 1 GB as they are of hours in duration. To experience these high definition videos we request you to wait at least 5 minutes or more; depending on your computer's RAM and internet connection.",
];

const q1150 = [
  "LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship.",
];

const q1151 = [
  "The set of training is not exhaustive and you are required to keep learning about the technology on your own to excel in your Live Project.",
];

const q1152 = [
  "As mentioned in the video: -Step1: Go to lp1 module Step2: Select module Step3: Put token (it will direct you to the home screen if the token is correct) Step4: Again go to lp1 module n select that module Step5: You will get the access by now Step6: Register there (each time for every module) Step7: Give the quiz Step8: Logout",
];

const q1153 = [
  "If you have submitted the ‘New Joinee Form’ after the 1st of March, please wait till the 31st of March to receive your access.",
];

const q1154 = [
  "Yes, your friends can apply till the 30th of March 2020; https://www.cloudcounselage.com/ipmaharashtra/. To be a student representative of Cloud Counselage, please contact Cloud Counselage HR.",
];

const q1155 = [
  "As a precautionary measure to safeguard our intern’s health, we have decided to conduct all the inductions online.",
];

const q1156 = [
  "Our team will verify and then only your task shall be accepted as completed. Please wait till the verification's complete.",
];

const q1157 = [
  "Ensure that you have clicked ‘Start’ when you resume a task, the ‘Finish’ button gets active only after the task is started. Once you complete the task you can then click on ‘Finish’ and then the efficiency is updated in the system. However, please raise this issue with the Cloud Counselage HR, as they will look at it on a case to case basis.",
];

const q1158 = [
  "As this is an internship you’re expected to do self-learning, mentorship is not part of an internship. However, we have created forums to resolve your doubts in the form of workgroups. As an intern ensure that you are part of relevant workgroups, i.e. ‘202003 - IP’ and your resp. Technology workgroup. In case, you are not a part of these workgroups, please reach out to ‘Cloud Counselage HR’ on Bitrix24 Chat.",
];

const q1159 = [
  "Live Projects will be provided by Cloud Counselage as these are the ongoing projects of Cloud Counselage and your opportunity to create an impact in the organisation.",
];

const q1160 = [
  "All our current interns if performing well in our internship programs can be offered an opportunity to interview for various positions in Cloud Counsealge. Many of our now full-time employees were interns in Cloud Counselage.",
];

const q1161 = [
  "As this is an online internship you do not need to visit the offices in the duration of this internship. You will be requested to visit the Vikhroli office only once; i.e. on your internship convocation day which will be in July 2020. Nevertheless, you can visit our offices with an appointment.",
];

const q1162 = [
  "Yes, you can extend your internship by being part of our other online programs like, ‘Online Career Program’.",
];

const q1163 = [
  "You are not restricted from doing the training of other technologies but you will only be given an internship certificate of the technology you’re selected for. 11",
];

const q1164 = [
  "Live Projects will have only your part of technology even if there are multiple technologies that are a part of the project, you will be working only on the part that covers your technology.",
];

const q1165 = [
  "This could have an adverse effect on your internship, please contact Cloud Counsealge HR and provide a genuine reason to miss clock in/ clock out. Also, please start performing your clock in/ clock out now.",
];

const q1166 = [
  "No, you will receive LP3 and Live Projects of your respective technology.",
];

const q1167 = [
  "We do understand that you might be interested in other technologies and are eager to learn more, but we have prescribed the technologies based on your first inputs and cannot change your base technology. Nevertheless, you do have the opportunity to go through the training of all the technologies.",
];

const q1168 = [
  "The company policies will be published on www.cloudcounselage.co.in/ippolicies",
];

const q1169 = [
  "Once you submit your weekly report, your supervisor and the HR team shall take the cognizance. They would reach out to you in case of discrepancies, so you need not worry about the confirmation.",
];

const q1170 = [
  "It is showing the remaining time because it's configured for 8 working hours per day. Our interns need to only make sure that they are online for 1 hour per day or 7 hours a week.",
];

const q1171 = [
  "We have created a separate page with a pre-recorded induction, please visit it;https://www.cloudcounselage.co.in/ipinduction",
];

const q1172 = [
  "Yes. Although, you can always revisit the induction so that you can review what has been said in it.",
];

const q1173 = [
  "We have observed that there is such an attachment for a few mailing service providers like Gmail and yahoo, please ignore this attachment. It won’t cause any harm to your system",
];

const q1174 = [
  "Please push you to code in a public repo of your GitHub account if required by your LP3 assignment.",
];

const q1175 = [
  "For now, please concentrate on completing the task. We will ask all the interns to submit their work in the first week of June. Ensure you make it up to the mark till then as there would be no extension given that time.",
];

const q1176 = ["We will review this task in May 2020."];

const q1177 = [
  "Live project's use case will strictly be provided by Cloud Counselage and you cannot choose your own use case.",
];

const q1178 = [
  "Yes, it is mandatory to do, we are trying to include some more tasks due to the current scenarios, but adherence to clock-in/ clock-out policy is utterly important.",
];

const q1179 = ["Yes, you can be."];

const q1180 = [
  "As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)",
];

const q1181 = [
  "Please ask them to send a mail to hrsupport@cloudcounselage.in and wait till 30th April 2020 for a reply.",
];

const q1182 = [
  "As mentioned in the '202003-IP' workgroup, please ask all queries related to LP3 in your technology workgroup only and tag Jayanth G S in your message.",
];

const q1183 = [
  "If you had not attended the live induction and have registered in the pre-recorded session after 4 PM, 31st March. Then you'll get your joining letter by 30th April 2020. If you have otherwise, please a mail to hrsupport@cloudcounselage.in or ping 'Cloud Counselage HR' in B24.",
];

const q1184 = [
  "Since some of you are not able to download, please find the same document in your technology drive in the folder LP3. We have made an announcement in your respective technology workgroup as well, please check.",
];

const q1185 = [
  "A) Yes, you'll need to complete the mandatory training as cloud computing is fundamental to many technologies and this additional knowledge will help you in your career. When will the step 3 of the internship program start? Hope you and your family are in the best of health given the current scenario and you are making the most of your time through the 'Internship Program' by CloudCounselage. According to the schedule of this internship program, some of you must have completed steps 1 and 2 of your internship and some of you must be in the process of completing step 2. Please note that as per the program schedule (https://www.cloudcounselage.com/ipmaharashtra/), the following are the dates for entering step 3, wherein interns take preparatory leaves for exams:a) 16th April 2020 - access given before 31st March 2020 b) 01st May 2020 - access given after 31st March 2020 Kindly note that we are in touch with the DTE - Maharashtra for the exam schedules of various universities in Maharashtra and the start of step 4 will be announced accordingly via individual email and our social media pages. While step 3 is in progress, you do not need to login to Bitrix24 or submit your timesheet until you are in step 4. All the best and please stay safe! See you soon in step 4.",
];

const q1186 = [
  "This is due to many webpages opened, please close your browser and try again or you can open a new incognito tab and try again.",
];

const q121 = ["Your IP Start Date is 01/03/2020"];
const q122 = ["Your IP End Date is 31/05/2020"];
const q123 = [
  "Prerequisites For IP is as follows:",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
];
const q124 = ["You must need to be a Degree Student"];
const q125 = ["Google Chrome is recommended"];

const q131 = ["Your IP Start Date is 18/03/2020"];
const q132 = ["Your IP End Date is 31/05/2020"];
const q133 = [
  "Prerequisites For IP is as follows:",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
];
const q134 = ["You must need to be a Degree Student"];
const q135 = ["Google Chrome is recommended"];

const q141 = ["Your IP Start Date is 02/04/2020"];
const q142 = ["Your IP End Date is 31/05/2020"];
const q143 = [
  "Prerequisites For IP is as follows:",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
];
const q144 = ["You must need to be a Degree Student"];
const q145 = ["Google Chrome is recommended"];

const q151 = ["Your IP Start Date is 15/06/2020"];
const q152 = ["Your IP End Date is 31/07/2020"];
const q153 = [
  "Prerequisites For IP is as follows:",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
];
const q154 = ["You must need to be a Degree Student"];
const q155 = ["Google Chrome is recommended"];

app.post("/question", (req, res) => {
  try {
    const layer = req.body.layer;
    const resp = req.body.response;
    const prev = req.body.prev;

    if (layer == 0) return res.send(q1);
    else if (layer == 1 && resp == 1) return res.send(q11);
    else if (layer == 1 && resp == 2) return res.send(q12);
    else if (layer == 1 && resp == 2) return res.send(q13);
    else if (layer == 1 && resp == 2) return res.send(q14);
    else if (layer == 1 && resp == 2) return res.send(q15);
    else if (layer == 2 && prev == 1 && resp == 1) return res.send(q111);
    else if (layer == 2 && prev == 1 && resp == 2) return res.send(q112);
    else if (layer == 2 && prev == 1 && resp == 3) return res.send(q113);
    else if (layer == 2 && prev == 1 && resp == 4) return res.send(q114);
    else if (layer == 2 && prev == 1 && resp == 5) return res.send(q115);
    else if (layer == 2 && prev == 1 && resp == 6) return res.send(q116);
    else if (layer == 2 && prev == 1 && resp == 7) return res.send(q117);
    else if (layer == 2 && prev == 1 && resp == 8) return res.send(q118);
    else if (layer == 2 && prev == 1 && resp == 9) return res.send(q119);
    else if (layer == 2 && prev == 1 && resp == 10) return res.send(q1110);
    else if (layer == 2 && prev == 1 && resp == 11) return res.send(q1111);
    else if (layer == 2 && prev == 1 && resp == 12) return res.send(q1112);
    else if (layer == 2 && prev == 1 && resp == 13) return res.send(q1113);
    else if (layer == 2 && prev == 1 && resp == 14) return res.send(q1114);
    else if (layer == 2 && prev == 1 && resp == 15) return res.send(q1115);
    else if (layer == 2 && prev == 1 && resp == 16) return res.send(q1116);
    else if (layer == 2 && prev == 1 && resp == 17) return res.send(q1117);
    else if (layer == 2 && prev == 1 && resp == 18) return res.send(q1118);
    else if (layer == 2 && prev == 1 && resp == 19) return res.send(q1119);
    else if (layer == 2 && prev == 1 && resp == 20) return res.send(q1120);
    else if (layer == 2 && prev == 1 && resp == 21) return res.send(q1121);
    else if (layer == 2 && prev == 1 && resp == 22) return res.send(q1122);
    else if (layer == 2 && prev == 1 && resp == 23) return res.send(q1123);
    else if (layer == 2 && prev == 1 && resp == 24) return res.send(q1124);
    else if (layer == 2 && prev == 1 && resp == 25) return res.send(q1125);
    else if (layer == 2 && prev == 1 && resp == 26) return res.send(q1126);
    else if (layer == 2 && prev == 1 && resp == 27) return res.send(q1127);
    else if (layer == 2 && prev == 1 && resp == 28) return res.send(q1128);
    else if (layer == 2 && prev == 1 && resp == 29) return res.send(q1129);
    else if (layer == 2 && prev == 1 && resp == 30) return res.send(q1130);
    else if (layer == 2 && prev == 1 && resp == 31) return res.send(q1131);
    else if (layer == 2 && prev == 1 && resp == 32) return res.send(q1132);
    else if (layer == 2 && prev == 1 && resp == 33) return res.send(q1133);
    else if (layer == 2 && prev == 1 && resp == 34) return res.send(q1134);
    else if (layer == 2 && prev == 1 && resp == 35) return res.send(q1135);
    else if (layer == 2 && prev == 1 && resp == 36) return res.send(q1136);
    else if (layer == 2 && prev == 1 && resp == 37) return res.send(q1137);
    else if (layer == 2 && prev == 1 && resp == 38) return res.send(q1138);
    else if (layer == 2 && prev == 1 && resp == 39) return res.send(q1139);
    else if (layer == 2 && prev == 1 && resp == 40) return res.send(q1140);
    else if (layer == 2 && prev == 1 && resp == 41) return res.send(q1141);
    else if (layer == 2 && prev == 1 && resp == 42) return res.send(q1142);
    else if (layer == 2 && prev == 1 && resp == 43) return res.send(q1143);
    else if (layer == 2 && prev == 1 && resp == 44) return res.send(q1144);
    else if (layer == 2 && prev == 1 && resp == 45) return res.send(q1145);
    else if (layer == 2 && prev == 1 && resp == 46) return res.send(q1146);
    else if (layer == 2 && prev == 1 && resp == 47) return res.send(q1147);
    else if (layer == 2 && prev == 1 && resp == 48) return res.send(q1148);
    else if (layer == 2 && prev == 1 && resp == 49) return res.send(q1149);
    else if (layer == 2 && prev == 1 && resp == 50) return res.send(q1150);
    else if (layer == 2 && prev == 1 && resp == 51) return res.send(q1151);
    else if (layer == 2 && prev == 1 && resp == 52) return res.send(q1152);
    else if (layer == 2 && prev == 1 && resp == 53) return res.send(q1153);
    else if (layer == 2 && prev == 1 && resp == 54) return res.send(q1154);
    else if (layer == 2 && prev == 1 && resp == 55) return res.send(q1155);
    else if (layer == 2 && prev == 1 && resp == 56) return res.send(q1156);
    else if (layer == 2 && prev == 1 && resp == 57) return res.send(q1157);
    else if (layer == 2 && prev == 1 && resp == 58) return res.send(q1158);
    else if (layer == 2 && prev == 1 && resp == 59) return res.send(q1159);
    else if (layer == 2 && prev == 1 && resp == 60) return res.send(q1160);
    else if (layer == 2 && prev == 1 && resp == 61) return res.send(q1161);
    else if (layer == 2 && prev == 1 && resp == 62) return res.send(q1162);
    else if (layer == 2 && prev == 1 && resp == 63) return res.send(q1163);
    else if (layer == 2 && prev == 1 && resp == 64) return res.send(q1164);
    else if (layer == 2 && prev == 1 && resp == 65) return res.send(q1165);
    else if (layer == 2 && prev == 1 && resp == 66) return res.send(q1166);
    else if (layer == 2 && prev == 1 && resp == 67) return res.send(q1167);
    else if (layer == 2 && prev == 1 && resp == 68) return res.send(q1168);
    else if (layer == 2 && prev == 1 && resp == 69) return res.send(q1169);
    else if (layer == 2 && prev == 1 && resp == 70) return res.send(q1170);
    else if (layer == 2 && prev == 1 && resp == 71) return res.send(q1171);
    else if (layer == 2 && prev == 1 && resp == 72) return res.send(q1172);
    else if (layer == 2 && prev == 1 && resp == 73) return res.send(q1173);
    else if (layer == 2 && prev == 1 && resp == 74) return res.send(q1174);
    else if (layer == 2 && prev == 1 && resp == 75) return res.send(q1175);
    else if (layer == 2 && prev == 1 && resp == 76) return res.send(q1176);
    else if (layer == 2 && prev == 1 && resp == 77) return res.send(q1177);
    else if (layer == 2 && prev == 1 && resp == 78) return res.send(q1178);
    else if (layer == 2 && prev == 1 && resp == 79) return res.send(q1179);
    else if (layer == 2 && prev == 1 && resp == 80) return res.send(q1180);
    else if (layer == 2 && prev == 1 && resp == 81) return res.send(q1181);
    else if (layer == 2 && prev == 1 && resp == 82) return res.send(q1182);
    else if (layer == 2 && prev == 1 && resp == 83) return res.send(q1183);
    else if (layer == 2 && prev == 1 && resp == 84) return res.send(q1184);
    else if (layer == 2 && prev == 1 && resp == 85) return res.send(q1185);
    else if (layer == 2 && prev == 1 && resp == 86) return res.send(q1186);
    else if (layer == 2 && prev == 2 && resp == 1) return res.send(q121);
    else if (layer == 2 && prev == 2 && resp == 2) return res.send(q122);
    else if (layer == 2 && prev == 2 && resp == 3) return res.send(q123);
    else if (layer == 2 && prev == 2 && resp == 4) return res.send(q124);
    else if (layer == 2 && prev == 2 && resp == 5) return res.send(q125);
    else if (layer == 2 && prev == 3 && resp == 1) return res.send(q131);
    else if (layer == 2 && prev == 3 && resp == 2) return res.send(q132);
    else if (layer == 2 && prev == 3 && resp == 3) return res.send(q133);
    else if (layer == 2 && prev == 3 && resp == 4) return res.send(q134);
    else if (layer == 2 && prev == 3 && resp == 5) return res.send(q135);
    else if (layer == 2 && prev == 4 && resp == 1) return res.send(q141);
    else if (layer == 2 && prev == 4 && resp == 2) return res.send(q142);
    else if (layer == 2 && prev == 4 && resp == 3) return res.send(q143);
    else if (layer == 2 && prev == 4 && resp == 4) return res.send(q144);
    else if (layer == 2 && prev == 4 && resp == 5) return res.send(q145);
    else if (layer == 2 && prev == 5 && resp == 1) return res.send(q151);
    else if (layer == 2 && prev == 5 && resp == 2) return res.send(q152);
    else if (layer == 2 && prev == 5 && resp == 3) return res.send(q153);
    else if (layer == 2 && prev == 5 && resp == 4) return res.send(q154);
    else if (layer == 2 && prev == 5 && resp == 5) return res.send(q155);
  } catch (err) {
    res.send(err);
  }
});

const port = 4000 || process.env.port;

app.listen(port, () =>
  console.log("App is listening at http://localhost:" + port)
);
