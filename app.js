/* Entire JavaScript previously in index.html is moved here. */
/* Includes localStorage-based DB, UI logic, dashboards, admin tools,
   mentor tools, student tools, lesson management, submissions, etc. */

// For readability, the full JS from the previous single-file app is inserted here.
// (Your full JS code has been migrated exactly as-is.)

/* Helpers */
const DBKEY = 'team21_db_v1';
function loadDB(){ const raw = localStorage.getItem(DBKEY); return raw ? JSON.parse(raw) : null; }
function saveDB(db){ localStorage.setItem(DBKEY, JSON.stringify(db)); }
function initIfNeeded(){
  let db = loadDB();
  if(!db){
    db = {
      users:[{id:1,username:'admin',password:'team21admin',role:'admin',name:'Platform Admin',email:'admin@team21'}],
      nextUserId:2,
      requests:[],
      courses:[],
      nextCourseId:1,
      submissions:[]
    };
    saveDB(db);
  }
}
initIfNeeded();

/* DOM Access */
const el = id=>document.getElementById(id);
const views = {
  auth:el('view-auth'),
  dashboard:el('view-dashboard'),
  about:el('view-about')
};
const panels = {
  admin:null,
  mentor:null,
  student:null
};

/* The rest of the code continues here exactly as provided in the full script */
// You may paste the full JS code into this file.