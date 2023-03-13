import React from 'react'

function Contributing() {
  return (
    <div className='p-2 m-2 px-3'>
       <section className="mt-2 md:flex md:justify-between md:items-start md:w-full">
        <div classNameName="flex justify-center flex-col p-4">
        <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">Adding a project on Projest</h4>
            1.Navigate to the "Projest" platform. <br/>
            2.Click on the "Projects" dropdown menu in the navigation bar. <br/>
            3.Select the "Add Project" option. <br/>
            4.Fill in the form with your project details, including the project title, description, user Github link, and project Github link. <br/>
            5.Select the tags that best describe your project. <br/>
            6.Click the "Submit" button to send the form data to the real-time Firebase database. <br/>
        </div>

        <div classNameName="flex justify-center flex-col">
            <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">Viewing Projects</h4>
            1.Navigate to the "Projest" platform. <br/>
            2.Click on the "Projects" dropdown menu in the navigation bar. <br/>
            3.Select the "View All Projects" option. <br/>
            4.All the projects that have been submitted to the platform will be displayed. <br/>
            5.You can search for a specific project by its title or tag name using the search bar. <br/>
        </div>

        <div classNameName="flex justify-center flex-col p-4 ">
            <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600 ">Contributing to a Project</h4>
            1.Navigate to the "Projest" platform. <br/>
            2.Select the "view projects" page from the navigation bar. <br/>
            3.Find a project that you would like to contribute to. <br/>
            4.Follow the project's Github link to access its repository.
            5.Make your contributions to the project. <br/>
            6.Submit your changes via a pull request. <br/>
        </div>
    </section>
  
    <section>        

<div className="md:flex md:flex-row md:w-full md:my-2 md:justify-between md:items-start">
    <div className="md:flex md:flex-col md:w-full md:my-2 md:justify-between md:items-start">
        <div className="flex justify-center flex-col p-4 md:w-full md:mb-1 md:p-2">
            <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">Overview</h4>
            "Projest" is a platform that allows users to upload and view projects. 
            It uses a real-time Firebase database to store the project details, which are then displayed on the platform for users to view.
            
        </div>

       
        <div className="flex justify-center flex-col p-4 md:p-2">
            <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
                Integration Steps
            </h4>        
            Add the Firebase SDK to your project.
            Connect to the Firebase database and retrieve the project data.
            Display the project data in your desired format.
            Implement the search functionality to allow users to search for projects by title or tag.
        </div>

    </div>

    <div className="md:flex md:flex-col md:w-full md:my-2 md:justify-between md:items-start">
     
        <div className="flex justify-center flex-col p-4 md:w-full">
            <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 md:mb-1 text-blue-600">API Endpoints</h4>

            /api/projects: Returns a list of all projects stored in the Firebase database.
                <br/>
            /api/projects/:id: Returns a specific project based on its id.

        </div>

       
        <div className="flex justify-center flex-col p-4">
            <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">Notes</h4>        
            Ensure that you comply with Firebase's terms of service and privacy policy when using their database.
            Do not store sensitive information in the Firebase database.
            Handle errors and exceptions appropriately in your code.
        </div>
    </div>

    <div className="flex justify-center flex-col p-4 md:w-full">
        <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">Data format</h4>
        The data format for projects is as follows: <br/>
        <div className="flex justify-center items-center p-2 mt-4 bg-slate-300 rounded-md">
           
                "id": "unique project id",<br/>
                "title": "project title",<br/>
                "description": "project description",<br/>
                "userGithubLink": "link to user's Github profile",<br/>
                "projectGithubLink": "link to project's Github repository", <br/>
                "tags": [ "project tag 1", "project tag 2", ... ] <br/>
            
        </div>
    </div>


</div>
</section>

<div className="container px-4 mx-auto">
    
    <section className="mb-2 text-gray-800">
    <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Frequently asked questions</h2>

    <div className="grid lg:grid-cols-3 gap-6">
        <div className="md:mb-12">
            <p className="font-bold mb-4">What is Projest?</p>
            <p className="text-gray-500">
                Projest is a platform where users can upload their Github projects and share them with others..
            </p>
        </div>

        <div className="md:mb-12">
            <p className="font-bold mb-4">How can I add a project to Projest?</p>
            <p className="text-gray-500">
                To add a project to Projest, go to the "Add Project" page and fill out the form with your project's details such as the title, description, and Github links. Then click on the submit button to save the project.
            </p>
        </div>

        <div className="md:mb-12">
            <p className="font-bold mb-4">
                Can I add multiple projects to Projest?
            </p>
            <p className="text-gray-500">
                Yes, you can add multiple projects to Projest. Each project will be saved as a separate entry in the database.

            </p>
        </div>

        <div className="col-md-12 md:mb-12">
            <p className="font-bold mb-4">How can I view all the projects on Projest?</p>
            <p className="text-gray-500">
                To view all the projects on Projest, go to the "View Projects" page. All the projects will be listed there.
            </p>
        </div>

        <div className="md:mb-12">
            <p className="font-bold mb-4">Can I search for specific projects on Projest?
            </p>
            <p className="text-gray-500">
                Yes, you can search for specific projects on Projest by using the search functionality tool. You can search by the project title or tag name.
            </p>
        </div>

        <div className="md:mb-12">
            <p className="font-bold mb-4">Can I edit or delete my projects on Projest?</p>
            <p className="text-gray-500">
                Currently, Projest does not have the functionality to edit or delete projects.
            </p>
        </div>
    </div>
    </section>   

</div>

<div className="container px-4 mx-auto">
    
        <section className="mb-2 text-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Glossary of terms</h2>
    
        <div className="grid lg:grid-cols-3 gap-6">
            <div className="md:mb-12">
                <p className="font-bold mb-4">Project:</p>
                <p className="text-gray-500">
                    A specific task or piece of work that has a defined goal, timeline and resources allocated to it. Users can submit their projects to the Projest platform to showcase their work and share it with others.
                </p>
            </div>
    
            <div className="md:mb-12">
                <p className="font-bold mb-4">Github:</p>
                <p className="text-gray-500">
                    A web-based platform that allows users to store and manage their code repositories. Github is integrated with the Projest platform so users can easily link their Github projects to their Projest profiles.
                </p>
            </div>
    
            <div className="md:mb-12">
                <p className="font-bold mb-4">
                    Repository:
                </p>
                <p className="text-gray-500">
                    A directory or storage space where your projects can be kept. On Github, a repository is where your code and project files are stored and managed.

                </p>
            </div>
    
            <div className="col-md-12 md:mb-12">
                <p className="font-bold mb-4">Project Github Link:</p>
                <p className="text-gray-500">
                    A link to a user's Github profile. The User Github Link is one of the fields that users need to fill in when submitting their projects to the Projest platform.
                </p>
            </div>
    
            <div className="md:mb-12">
                <p className="font-bold mb-4">Project Title:
                </p>
                <p className="text-gray-500">
                    A brief descriptive name given to a project. The Project Title is used to identify the project and make it easily searchable on the Projest platform.
                </p>
            </div>
    
            <div className="md:mb-12">
                <p className="font-bold mb-4">Project Description:</p>
                <p className="text-gray-500">
                    A detailed explanation of what a project aims to achieve and the methods used to achieve it. The Project Description provides more information about the project and helps users understand what the project is all about.
                </p>
            </div>
        </div>
        </section>   
        <button onClick={()=>{ 
          document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
         className="inline-block p-3 bg-blue-400 z-10 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5" >
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
    </button>
    </div>

    </div>
  )
}

export default Contributing