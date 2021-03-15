import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Paper {
  firebaseIndex?:string;
  id: number;
  title: string;
  studentName:string;
  selected:boolean;
  url:string;
}

export interface Student{
  firebaseIndex?:string;
  id:number;
  name:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('closeUpdateModal', { static: false }) closeUpdateModal: ElementRef;

  papers:Paper[];
  tempPaper:Paper;
  updateId: number;
  studentName :string;
  updateTitle:string;
  updateSuccess:string;
  names:Student[];
  tempStudent:Student;

  selectedObject:any;

  firebase_papers: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
    //this.initialData();
    // if(localStorage.getItem("papers")===null){
    //   this.initialData();
    // }else{
    //   this.papers=JSON.parse(localStorage.getItem('papers'));
    // }
    //this.initialData();
    this.getData();
  }

  initialData(){
     this.names=[
       {id:1,name:'Peter ALOISI'},
       {id:2,name:'Aquoya FAUST'},
       {id:3,name:'Carter GOODWIN'},
       {id:4,name:'Marcus HUTNIK'},
       {id:5,name:'Athira KAIVELIKKALI'},
       {id:6,name:'John LANSKA'},
       {id:7,name:'Jordan LARUE'},
       {id:8,name:'Issac LOCK'},
       {id:9,name:'Connor LUDWIGSON'},
       {id:10,name:'Seth RASMUSSON'},
       {id:11,name:'Christian STRAUSS'},
       {id:12,name:'Jian CHEN'},
       {id:13,name:'Xingzhan FENG'},
       {id:14,name:'Ziyu GUO'},
       {id:15,name:'Zhuoer HUANG'},
       {id:16,name:'Jiashu LI'},
       {id:17,name:'Jiaxuan LI'},
       {id:18,name:'Lu LIANG'},
       {id:19,name:'Rui LIU'},
       {id:20,name:'Wentai PENG'},
       {id:21,name:'Yaoxuan WEI'},
       {id:22,name:'Jiayi YAO'}];

    this.papers=[
      {id:1,title:"Well-formed software architecture analysis",studentName:"Available",selected:false,url:"../assets/papers/Well-formed software architecture analysis.pdf"},
      {id:2,title:"Transforming flowcharts into colored petri nets",studentName:"Available",selected:false,url:"../assets/papers/Transforming flowcharts into colored petri nets.pdf"},
      {id:3,title:"Testing and analysis of web applications using page models",studentName:"Available",selected:false,url:"../assets/papers/Testing and analysis of web applications using page models.pdf"},
      {id:4,title:"Successive Refinement of Models for MBT",studentName:"Available",selected:false,url:"../assets/papers/Successive Refinement of Models for MBT.pdf"},
      {id:5,title:"Some Thoughts on MBT Optimization",studentName:"Available",selected:false,url:"../assets/papers/Some Thoughts on MBT Optimization.pdf"},
      {id:6,title:"Security Maturity model of web applications",studentName:"Available",selected:false,url:"../assets/papers/Security Maturity model of web applications.pdf"},
      {id:7,title:"Scenario based specification of security protocols",studentName:"Available",selected:false,url:"../assets/papers/Scenario based specification of security protocols.pdf"},
      {id:8,title:"Robotic software migration using static analysis and model-driven engineering",studentName:"Available",selected:false,url:"../assets/papers/Robotic software migration using static analysis and model-driven engineering.pdf"},
      {id:9,title:"Repairing model inconsistencies",studentName:"Available",selected:false,url:"../assets/papers/Repairing model inconsistencies.pdf"},
      {id:10,title:"Programming model for sei-implicit parallelization",studentName:"Available",selected:false,url:"../assets/papers/Programming model for sei-implicit parallelization.pdf"},
      {id:11,title:"Pragmatic study - Modeling IT security management",studentName:"Available",selected:false,url:"../assets/papers/Pragmatic study - Modeling IT security management.pdf"},
      {id:12,title:"Ontology-based model for automotive security",studentName:"Available",selected:false,url:"../assets/papers/Ontology-based model for automotive security.pdf"},
      {id:13,title:"Model-integrated queries for runtime events analysis",studentName:"Available",selected:false,url:"../assets/papers/Model-integrated queries for runtime events analysis.pdf"},
      {id:14,title:"Model-driven space robotic software",studentName:"Available",selected:false,url:"../assets/papers/Model-driven space robotic software.pdf"},
      {id:15,title:"Model-driven security for mobile banking",studentName:"Available",selected:false,url:"../assets/papers/Model-driven security for mobile banking.pdf"},
      {id:16,title:"Model-based security testing",studentName:"Available",selected:false,url:"../assets/papers/Model-based security testing.pdf"},
      {id:17,title:"Model-based security analysis",studentName:"Available",selected:false,url:"../assets/papers/Model-based security analysis.pdf"},
      {id:18,title:"Model-based framework for energy consumption",studentName:"Available",selected:false,url:"../assets/papers/Model-based framework for energy consumption.pdf"},
      {id:19,title:"Model-based discrimination analysis",studentName:"Available",selected:false,url:"../assets/papers/Model-based discrimination analysis.pdf"},
      {id:20,title:"Model-based cluster analysis",studentName:"Available",selected:false,url:"../assets/papers/Model-based cluster analysis.pdf"},
      {id:21,title:"Model for provably secure software design",studentName:"Available",selected:false,url:"../assets/papers/Model for provably secure software design.pdf"},
      {id:22,title:"Mining interaction patterns in design of web applications",studentName:"Available",selected:false,url:"../assets/papers/Mining interaction patterns in design of web applications.pdf"},
      {id:23,title:"Lessons Learned using MBT",studentName:"Available",selected:false,url:"../assets/papers/Lessons Learned using MBT.pdf"},
      {id:24,title:"Formalizing a decision table into Petri Nets",studentName:"Available",selected:false,url:"../assets/papers/Formalizing a decision table into Petri Nets.pdf"},
      {id:25,title:"Fast validaton of DRAM protocols with timed petri nets",studentName:"Available",selected:false,url:"../assets/papers/Fast validaton of DRAM protocols with timed petri nets.pdf"},
      {id:26,title:"Distributed Context Petri Nets",studentName:"Available",selected:false,url:"../assets/papers/Distributed Context Petri Nets.pdf"},
      {id:27,title:"Design patterns for Angular Hotdraw",studentName:"Available",selected:false,url:"../assets/papers/Design patterns for Angular Hotdraw.pdf"},
      {id:28,title:"Contract-based design patterns",studentName:"Available",selected:false,url:"../assets/papers/Contract-based design patterns.pdf"},
      {id:29,title:"Analysis of design patterns in knowledge processing",studentName:"Available",selected:false,url:"../assets/papers/Analysis of design patterns in knowledge processing.pdf"},
      {id:30,title:"5-G Security Architecture",studentName:"Available",selected:false,url:"../assets/papers/5-G Security Architecture.pdf"},
    ]

      this.papers.forEach(paper=>{
        this.firestore.collection('papers').add(paper);
      });

      this.names.forEach(name=>{
        this.firestore.collection('names').add(name);
      })
    
  }

  getData(){
    this.papers=[];
    this.names=[];
    this.firestore.collection('papers').snapshotChanges().subscribe(data=>{
      this.papers=data.map(e=>{
        this.tempPaper=e.payload.doc.data() as Paper;
        this.tempPaper.firebaseIndex=e.payload.doc.id;
        return this.tempPaper;  
      });
      this.papers.sort((a,b)=>a.id-b.id);
    });

    

    this.firestore.collection('names').snapshotChanges().subscribe(student=>{
      this.names=student.map(e2=>{
        this.tempStudent=e2.payload.doc.data() as Student;
        this.tempStudent.firebaseIndex=e2.payload.doc.id;
        return this.tempStudent;
      });
      this.names.sort((a,b)=>a.id-b.id);
    });
    
  }


  setUpdateId(id:number){
    this.updateId=id;
  }
  setUpdateTitle(title:string){
    this.updateTitle=title;
  }

  update(){
    this.papers.forEach(paper=>{
      if(paper.id==this.updateId){
        paper.studentName=this.studentName;
        paper.selected=true;
        this.updateSuccess=this.studentName+" has selected paper "+paper.id+".";
        // delete paper.firebaseIndex;
        this.firestore.doc('papers/' + paper.firebaseIndex).update(paper);
      }
    });

    //this.names=this.names.filter(name=>name.name!==this.studentName);
    this.names.forEach(student=>{
      if(student.name===this.studentName){
        this.firestore.doc('names/' + student.firebaseIndex).delete();
      }
    })
    setTimeout(()=>this.closeUpdateModal.nativeElement.click(),1000);
    localStorage.setItem("papers",JSON.stringify(this.papers));
    setTimeout(()=>this.clear(),1500);
    //this.getData();
  }

  clear(){
    this.studentName=undefined;
    this.updateSuccess=undefined;
  }  
}
