// // 1
// let mobile = [
//     {
//         Name: 'Sony Xperia XZ Premium',
//         Brand: 'Sony',
//         Price: '4428',
//         Color: 'White',
//         Category: 'Phone',
//         providers: 'phukienso',
//     },
//     {
//         Name: 'OPPO F3 Plus',
//         Brand: 'OPPO',
//         Price: '5487',
//         Color: 'Black',
//         Category: 'Phone',
//         providers: 'Tgdd',
//     },
//     {
//         Name: 'IPhone 13 Pro max',
//         Brand: 'Apple',
//         Price: '21490',
//         Color: 'Gray',
//         Category: 'Phone',
//         providers: 'Tgdd',
//     },
//     {
//         Name: 'Samsung Galaxy S8',
//         Brand: 'Samsung',
//         Price: '8490',
//         Color: 'Blue',
//         Category: 'Phone',
//         providers: 'Tgdd',
//     }
// ];
// console.dir(mobile)
// 1.1
    // for (i = 0; i < mobile.length; i++){
    //     console.log(`Name: ${mobile[i].Name}`);
    //     console.log(`Price: ${mobile[i].Price}`);
    // }
// 1.2
    // let userInput = Number(prompt('Number and Enter'));
    // console.log(`Name: ${mobile[userInput].Name}`);
    // console.log(`Brand: ${mobile[userInput].Brand}`);
    // console.log(`Price: ${mobile[userInput].Price}`);
    // console.log(`Color: ${mobile[userInput].Color}`);
    // console.log(`Category: ${mobile[userInput].Category}`);

// 1.4
    // for (i = 0; i < mobile.length; i++){
    //     mobile[i].Providers = prompt('Providers ' + mobile[i].Name + ' Enter')
    // }
    // console.table(mobile)

// 1.5
    // let providers = prompt('Nhập phukienso hoặc tgdd');
    // for (i = 0; i < mobile.length; i++) {
        // if (mobile[i].providers === providers) {
    //         console.log(`name: ${mobile[i].Name}`);
    //         console.log(`Brand: ${mobile[i].Brand}`);
    //         console.log(`Price: ${mobile[i].Price}`);
    //         console.log(`Color: ${mobile[i].Color}`);
    //         console.log(`Category: ${mobile[i].Category}`);
    //         console.log(`providers: ${mobile[i].providers}`);
    //         console.log('---------------------------------');
    //     }
    // }



//2
    // let study = [
    //     {
    //         id: 1,
    //         namestudy: 'HTML',
    //         ['Hoan thanh']: 'false',
    //     },
    //     {
    //         id: 2,
    //         namestudy: 'CSS',
    //         ['Hoan thanh']: 'false',
    //     },
    //     {
    //         id: 3,
    //         namestudy: 'JavaScript', 
    //         ['Hoan thanh']: 'false',
    //     },
    //     {
    //         id: 4,
    //         namestudy: 'Git',
    //         ['Hoan thanh']: 'false'
    //     }
    // ]
    // console.log(study)

    // for (i = 0; i <= study.length; i++){
    //     console.log(`${study[i].id}: ${study[i].namestudy}`)
    //     console.log(`Hoan thanh: ${study[i]["Hoan thanh"]}`)
    //     console.log('******************')
    // }



    // let crud = prompt('Create, Read, Update, Delete').toLowerCase();
    // if (crud == 'create'){
    // let moreSubjects = prompt('Subject name and enter');
    // for (i = 0; i <= study.length; i++){
    //     console.log(`${study[i].id}: ${study[i].namestudy}`)
    //     console.log(`Hoan thanh: ${study[i]["Hoan thanh"]}`)
    //     console.log('******************')
    // }
    
    // }

    // else if (crud == 'read'){
    //     let idSubjects = Number(prompt('Id enter'));
    //     for(i = 0; i <= study.length; i++){
    //         if (idSubjects == study[i].id){
    //             let moreSubjects = prompt('Name study');
    //             study[i].namestudy = moreSubjects;
    //             console.log(study[i].namestudy)
    //         }
    //     }
    // }
    // else if(task ==='update'){
    //     let update = Number(prompt('Enter id update: '));
    //     let newUpdate = prompt('Enter new content: ');
    //     study[update].nameStudy = newUpdate;
    
    //     for(let i = 0;i<study.length;i++){
    
    
    //         console.log(`${i+1}. ${study[i].nameStudy}`);
    //         console.log(`Hoàn thành: ${study[i]["Hoàn thành"]}`);
    //         console.log('-------------');
    //     }
    // }else if(task ==='complete'){
    //         let complete = prompt(`Enter id changer complete task:`);
           
    //        study[complete]["Hoàn thành"] = 'true';
    //         for(let i = 0;i<study.length;i++){
    
    
    //             console.log(`${i+1}. ${study[i].nameStudy}`);
    //             console.log(`Hoàn thành: ${study[i]["Hoàn thành"]}`);
    //             console.log('-------------');
    //         }
    // }else if(task ==='delete'){
    //     let del = prompt(`Enter id delete task:`);
    // delete study[del].nameStudy ;
    // delete study[del]["Hoàn thành"];
    
    // for(let i = 0;i<study.length;i++){
    
    
    //     console.log(`${i+1}. ${study[i].nameStudy}`);
    //     console.log(`Hoàn thành: ${study[i]["Hoàn thành"]}`);
    //     console.log('-------------');
    // }
    // }