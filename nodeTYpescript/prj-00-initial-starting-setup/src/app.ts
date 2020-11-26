// Code goes here!


function autobind(_2:any,_:string,descriptor:PropertyDescriptor){
     const originalMethod=descriptor.value;
     const adjDescriptor:PropertyDescriptor={
         configurable:true,
         get(){
             const boundFn=originalMethod.bind(this);
             return boundFn;
         }
         
     }   
     return adjDescriptor;
}


class ProjectInput{
    //we are getting all these property 
    templateElement:HTMLTemplateElement;
    hostElement:HTMLDivElement;
    element:HTMLFormElement;

    titleInputElement:HTMLInputElement;
    descriptionInputElement:HTMLInputElement;
    peopleInputElement:HTMLInputElement;
    constructor(){
        //coz we dont know this will return HTML TemplateElement or not 
        this.templateElement= document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement=document.getElementById('app')! as HTMLDivElement;
        //below thing is used because we are getting one node of whole element
        ///. innerhtml takes value as a string 
        //truw is for getting deep copy
        const importedNode=document.importNode(this.templateElement.content,true);
        this.element=importedNode.firstElementChild as HTMLFormElement;
        this.element.id='user-input';
        this.titleInputElement=this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement=this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement=this.element.querySelector('#people') as HTMLInputElement;
        
        
        this.attach();
        this.configure();
       // document.getElementById('check')!.innerHTML=this.templateElement.innerHTML;
    }

    private gatherUserInput():[string,string,number]|void{
        
        return;
    }
    @autobind
    private submitHandler(event:Event){
        event.preventDefault();
        const userInput=this.gatherUserInput();

    }

    private configure(){
        console.log('at leasy here')
        //ts knows there is submit button in ts file
        //again porob is for event listener we have to lose reference of function that we are passing
        this.element.addEventListener('submit',this.submitHandler);
        //or now this funtion is bound to this...the current object ...obj that is present in the line  I am wroiting 
        // this.element.addEventListener('submit',this.submitHandler.bind(this));
    }
    private attach(){
        //where to insert it ...after beginnig or before or right after tag
        this.hostElement.insertAdjacentElement('afterbegin',this.element);
    }
}
//dd
let myy=new ProjectInput();
