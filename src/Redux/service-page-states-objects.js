
//creating state for SalonForWomen service page

export const SalonForWomen = {
    Main_Photo: 'https://res.cloudinary.com/urbanclap/image/upload/fl_progressive,t_medium_res_template/categories/category_v2/category_24ad7c60.png',
    Main_Heading: 'Salon at home in Delhi',
    Sub_Heading_List : {
        First_Element : 'Branded Cosmetics are used-Loreal, Cheryls and O3+',
        Second_Element : 'Hygiene Friendly: Disposables items wipes, towels are used',
        Third_Element : 'Beauticians with minimum 5 years of experience' 
    },
   Packages_Box: {
       Heading: 'View All Beauty Services',
       Fields: {
           First_Field: 'Exclusive Packages',
           Second_Field: 'Waxing & Threading',
           Third_Field: 'Manicure + Pedicure',
           Fourth_Field: 'Facial & Hair Services',
       },
       Images : {
         First_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/categories/category_v2/category_e1f8fd10.png',
         Second_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/categories/category_v2/category_e8821d60.jpeg',
         Third_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/categories/category_v2/category_e1bbcd00.jpeg',
         Fourth_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/categories/category_v2/category_e085e510.jpeg'
       },

   },
   Services_Navbar: {
         First_Link: 'How it work',
         Second_Link: 'Beauticians',
         Third_Link: 'Blogs',
         Fourth_Link: 'FAQs',
         Fifth_Link: 'About salon at Home'
   },

   How_it_Work_Column: {
     heading: 'How it Works',
     How_It_Work_First_Element: {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg',
           Text: 'Choose a Salon service',
           Sub_Text: 'Select from various salon packages & services',
       },
       How_It_Work_Second_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_899773a0.png',
        Text: 'Choose your time-slot',
        Sub_Text: 'We service from 9am-7pm',
    },
        How_It_Work_Third_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_89c4ec40.png',
        Text: 'Relax and enjoy salon service',
        Sub_Text: 'Our Professionals will get in touch with you an hour before the Services'
    }
   },
   Professionals_Rating_Column: {
       headings : 'Beauticians',
       Professionals_Cards_List : [
           {
               Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/59aea6aef435855d00231904/1504852121389-878c03d18926e28dab792f7b0f35eee3.jpeg',
               Name: 'Tripti Rana',
               Address: 'CR Park, New Delhi, Delhi, India',
               Commenter_Name_Alphabate: 'S',
               Commenter_Name: 'Shweta',
               Rating: '5.0',
               Comment: 'I want to give her all the compliments, Punctual, hygenic, polite, patient, well groomed, expert service and eye to details ',
               Extra_Comments: {

                    Commenter_Name_Alphabate: 'N',
                    Commenter_Name: 'Nitish',
                    Comment: 'She did a good job overall. My wife was very heppy with service'    
               },
               
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58f6fc35c1baa80114ee69cb/1492676994320-5f0f54d102b4fa5ad4862bf72958a732.jpeg',   
            Name: 'Deepika Gupta',
            Address: 'Nihal Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'K',
            Commenter_Name: 'Kanika',
            Rating: '5.0',
            Comment: 'Best beauticians I have ever found perfect in her work super polite and very experienced',
            Extra_Comments:  {

                     Commenter_Name_Alphabate: 'A',
                     Commenter_Name: 'Anita',
                     Comment: 'Deepika Was hygenic, well groomed and she was really particular in giving a eye to each detail'    
                },
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5aab6da860fe0e5f00790341/1521201117549-32e33b267430edf24b770097209a661a.png',   
            Name: 'Pooja Kumari',
            Address: 'Neb sarai, Block J, Saket, New Delhi, Delhi, India',
            Commenter_Name_Alphabate: 'D',
            Commenter_Name: 'Divyanshi',
            Rating: '5.0',
            Comment: 'Very friendly, understanding and knowledgeable service. Loved it',
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'P',
                    Commenter_Name: 'Preksha',
                    Comment: 'Pooja did an excellent job.. loved her service'
                }
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5746c948e24e8a9079d75a87/1464422974637-bb6e4c93b2da9cacaeb22648c5ff6e7c.jpeg',   
            Name: 'Soni Srivastava',
            Address: 'Dwarka, Delhi, India',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5739bac1043aec0310980fb3/1533797616409-3e7de6e5531117307350e591b3b074c1.jpeg',   
            Name: 'Sandhya Sharma',
            Address: '3rd floor, JP House, Plot No. 172 Lane No. 2, Westend MArg ',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/595f8046d9717e5d00104dcc/1499925069985-18ce4e40fab9fca5f78a8d583b37f7b5.jpeg',   
            Name: 'Pooja Chauhan',
            Address: 'Budh Vihar Phase I, Budh Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'R',
            Commenter_Name: 'Revanshi',
            Rating: '5.0',
            Comment: 'I want ms.Pooja Chauhan again as my service expert next time too. Great service.' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/590413e0d8ac675a148c37dc/1521811884732-9ea57e1bdbaa98881f6b217e397dfe88.jpeg',   
            Name: 'Sanju Suryavanshi',
            Address: 'Naraina Village, Naraina, Delhi, India',
            Commenter_Name_Alphabate: 'A',
            Commenter_Name: 'Avni',
            Rating: '5.0',
            Comment: 'She was really superb at her work... PainLess Wax..' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
        
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5b4c338b9dc21f220082b063/1533711629518-35d2c6b35231e91f5131f0bd2b69748a.jpeg',   
            Name: 'Alka kapoor',
            Address: 'Sant Nagar, Burari, Delhi, India',
            Commenter_Name_Alphabate: 'H',
            Commenter_Name: 'Harpreet',
            Rating: '5.0',
            Comment: 'Good work and patient technician m. But Alka kapoor didn,t provide wax enough for a plus size person, also the aporn for waxing was very small. ' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'S',
                    Commenter_Name: 'Sudha',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        }
       ]

   },







//creating also lookes and  images carasou
Also_Looked_At_Services : {
    heading: 'People also lookes At',
    link_items_list: [
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bc824070.jpeg',
            text_lable: 'Massage Therapists At Home For Women',
            link:'',
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_3c671dc0.jpeg',
            text_lable: 'Microwave Repair Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a91b73d0.jpeg',
            text_lable: 'Electricians',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg',
            text_lable: 'Home Cleaning Service Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_f5a01e90.jpeg',
            text_lable: 'Disinfection Service',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_8d9f2900.png',
            text_lable: 'Beauty Service Professionals',
            link: ''
        }
    ]
},
 













   //creating services text names for services near me

   Related_Services_Column: {
     heading: 'Popular Services Near You',
     links:   [
       {link: 'Electricians'},
       {link: 'Microwave Repair'},
       {link: 'Cleaning Services'},
       {link: 'Salons'},
       {link:'Spa'}
    ],

   },


   
   Related_Services_Blogs_heading : {
       heading:'Popular Blog posts on Beauty'
   },

   Related_Services_Blogs_Carasoul : [
       {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/14180910/multani-mitti-face-mask-.jpg',
        textlable: 'Multani Mitti Packs: Everything About the Magic Mud',
        link: 'https://blog.urbancompany.com/beauty/multani-mitti-face-packs/'
        },

        {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/30163947/rose-water-for-dry-skin.jpg',
        textlable: 'Miracles Happen When You Use Rose Water for Dry Skin!',
        link: 'https://blog.urbancompany.com/beauty/rose-water-for-dry-skin/'},

        {
             image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/21190929/Rose-Water-for-Hair.jpg',
             textlable: '5 Reasons Why You Should Use Rose Water for Hair',
             link:'https://blog.urbancompany.com/beauty/rose-water-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/18153055/Threading-Do-and-Dont.jpg',
            textlable: 'What to Do (and Not Do) After a Salon Visit',
            link:'https://blog.urbancompany.com/beauty/dos-donts-salon-visit/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/11145102/rose-water-for-skin-feature-image.jpg',
            textlable: 'Best Ways to Use Rose Water for Skin',
            link: 'https://blog.urbancompany.com/beauty/rose-water-for-skin/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/12/25174046/apple-cider-hero1.png',
            textlable: 'Apple Cider Vinegar for Hair: Why Use It and How (Part 2)',
            link: 'https://blog.urbancompany.com/beauty/apple-cider-vinegar-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/06134012/lavender-1.png',
            textlable: 'How to Use Lavender Oil for Hair Growth & More',
            link: 'https://blog.urbancompany.com/beauty/lavender-oil-for-hair-growth/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25182257/new.jpg',
            textlable: 'Cocoa Butter Uses for Skin and Hair (DIY Recipes Included!)',
            link: 'https://blog.urbancompany.com/beauty/cocoa-butter-uses/'
        }
   ],








//creating object for latest customer reviews
    Latest_Customer_Reviews_Average_Column: {
        heading: 'Latest customer reviews',
        sub_heading: 'of Beauty Service Professionals in New Delhi',
        rating: '4.8',
        number_of_reviews: 'based on 789,789 reviews',
        view_more_comment: 'https://www.urbancompany.com/customer_reviews/delhi-ncr-salon-at-home'
    }
,










   

  //creating questions list for service page 

  Question_And_Answer: [
      
    {
       question: 'How long does the hair to be for waxing ?',
        
    },


    {
       question: 'What should I do to prepare for waxing?',
            
    },
       
    {
       question: 'Does waxing hurt a lot?',
            
    },

    {
        question: 'What are the types of waxing services available with you?'

    },

    {
        question: 'If I have my own wax and brand, can you use that?',
    },
     
    {
        question: 'How long will it take for the hair to grow back?',
    },

    {
        question: 'How often should I get waxed ?',
    },

    {
        question: 'I used a razor once. Will it hurt to get waxed now ?',
       
    },

    {
        question: 'Does waxing also help in removal of tan ?',
    }, 

    {
        question: 'I have never been waxed. Is there something I need to be careful about ?',
    },

    {
        question: 'I am on medication. Will it affect my waxing?',
    },

    {
        question: 'Can I get waxed if I am pregnant?',
    },

    {
        question: 'What is meant by double dipping?',
    },

    {
        question: 'Is eyebrow/upper lip waxing better than threading?',
    },

    {
       question: 'Is face wax safe?',
    },
    {
        question: 'Will it be hygienic to get waxed at home instead of salon that provides waxing near me?',
    }
]
,






    
    




    //creating state object for most asked questions and answer

   Modal_Question_And_Answer: {
      
       First_Element_Of_Question_Modal : {
           question: 'How long does the hair to be for waxing ?',
             answer: 'The longer the hair, the better the wax will grab the hair and will pull it out.' + 
             'Ideally one can wait for 3-5 weeks before getting waxing done depending on the hair growth.' +
             ' In case of emergency in the face of an event you need to go to, we suggest you wait for at least 7 days before another round of body waxing.' + 
             'A word of advice- never clip your hair before your waxing day.'
        },


       Second_Element_Of_Question_Modal: {
                  question: 'What should I do to prepare for waxing?',
                  answer: 'Although our salon at home professionals will do everything possible to make this process as pain free and satisfying as possible, there are certain things that you can do to ensure a great waxing session:' +
                  'Ensure the room you get the service done is air conditioned (unless it is winter)' +
                  'Exfoliate the skin lightly' +
                  'Moisturise till the day before your waxing appointment' + 
                  'Let the hair grow. Longer the hair, the better' +
                  'Check yourself for burns, cuts etc. We recommend you treat it before getting waxing done or inform the professional' +
                 ' Let the professional know if you are allergic to anything particular to the service'
        },
           
        Third_Element_Of_Question_Modal: {
                 question: 'Does waxing hurt a lot?',
                 answer: 'The process involves ripping out the hair from the follicle and it is a painful process.' +
                 ' However, the pain threshold for waxing varies from person to person. Those who have thick hair, sensitive skin and/or getting waxed for the first time particularly undergo more pain. ' +
                 'That is why it is highly recommended to go to not just pros but skilled salon beauty professionals. Our professionals undergo a rigorous training process before being a part of Urban Company, despite having years of experience in the field.' +
                 ' This ensures that you get the desired result with minimal inconvenience.'
        },

        Fourth_Element_Of_Question_Modal: {
            question: 'What are the types of waxing services available with you?',
            answer: 'We offer:' + 
            'Rica wax for sensitive skin' +
            'Rica peel off wax ' +
            'Regular wax'

        },

        Fifth_Element_Of_Question_Modal: {
                 question: 'If I have my own wax and brand, can you use that?',
                 answer: 'Yes. We recommend you inform the service professional about the same before you confirm the appointment. However, there no difference in charges and you will be charged as per our price points.'
        },
         
        Sixth_Element_Of_Question_Modal :{
            question: 'How long will it take for the hair to grow back?',
            answer: 'Everyone does not have the same growth pattern or the rate at which hair regrows. Some are lucky to even not have a re-growth for months.' +
            ' Even your ethnicity affects your hair growth.' +
            ' However, on an average 4 weeks is the time it takes for your hair to come back.'
        },

        Seventh_Element_Of_Question_Modal: {
            question: 'How often should I get waxed ?',
            answer: 'If you are getting waxed for the first time, start with getting it done every 2-3 weeks for at least 3-4 times.' +
            'This also helps in prevention of ingrown hairs to grow. After that it completely depends on how noticeable the hair, how much it bothers you and what is your salon budget.' +
            'On an average waxing is done every 4-6 weeks.'
        },

        Eighth_Element_Of_Question_Modal: {
            question: 'I used a razor once. Will it hurt to get waxed now ?',
            answer: 'Always avoid a razor as it not only results in cuts and scrapes but also makes hair harder and darker the next time it comes.' +
            ' Waxing becomes a painful process when hair is harder (and smaller).' +
            'Since waxing pulls the hair from the follicles, the hair that comes back is always softer and weaker. Hence, easier to pull.'
        },

        Nineth_Element_Of_Question_Modal: {
            question: 'Does waxing also help in removal of tan ?',
            answer: 'Waxing sticks to your skin and removes the top most layer of it.' +
            'Hence, it not only exfoliates the skin but also removes significant tanning.'
        }, 

        Tenth_Element_Of_Question_Modal :{
            question: 'I have never been waxed. Is there something I need to be careful about ?',
            answer: 'Here are some tips that can make the process easier on you:' +
            'Follow the steps for reducing the pain (given above)' +
            'Experiment with the kind of waxing to know what suits you the best' +
            'Do not trim your hair before you get waxed' +
            'Do not shave in between waxing sessions. The hair will be shorter and difficult to take out and you will also have more ingrown hair.'
        },

        Eleventh_Element_Of_Question_Modal :{
            question: 'I am on medication. Will it affect my waxing?',
            answer: 'Yes it does. Certain medicines make the skin sensitive by thinning them out. This makes it more likely for your skin to burn or peel during a session.' +
            ' Please let the salon professional know the medicine that you are on so they can recommend you the type of service you should go for.'
        },

        Twelth_Element_Of_Question_Modal: {
            question: 'Can I get waxed if I am pregnant?',
            answer: 'Yes you can. However, during pregnancy your skin is extra sensitive and needs to be treated with hard wax.' +
            'Ensure that the professional knows about your pregnancy and always go for the trained salon specialists from Urban Company.'
        },

        Thirteenth_Element_Of_Question_Modal: {
            question: 'What is meant by double dipping?',
            answer: 'Double dipping is the term used when a professional dips the same stick used in waxing back in the wax after applying it on you or anyone else.' +
             'Our professionals use fresh sticks to avoid bacterial infections and use sterile methods to apply wax so you don’t have to worry about contracting an infection.'
        },

         Fourteenth_Element_Of_Question_Modal: {
            question: 'Is eyebrow/upper lip waxing better than threading?',
            answer: 'Waxing may always not work for removing the unwanted hair off your body. In this case, threading your eyebrows and upper lip is better than waxing because:' +
            'It gives a better shape to your eyebrows' +
            'No chemicals involved' +
            'Works better for sensitive skin' +
            'Lasts longer ' +
            'Quick and less painful' 
        },

        Fifteenth_Element_Of_Question_Modal: {
           question: 'Is face wax safe?',
           answer: 'Facial skin is sensitive and needs extra care than the rest of the body. It is perfectly safe to get your face waxed but you need to get it done by a verified and a skilled salon professional, like the ones available on Urban Company.'
        },
        Sixteenth_Element_Of_Question_Modal:  {
            question: 'Will it be hygienic to get waxed at home instead of salon that provides waxing near me?',
            answer: 'Our salon professionals use the best equipment which is sterile before use. They also ensure minimal dirt and clean up after they have worked their magic. Your home is definitely a safer and a cleaner place than any salon near your home (or anywhere for that matter).'
        }
   }



}








































































































































































//creating state for salonforMen object


export const SalonForMen = {
    Main_Photo: 'https://images.unsplash.com/photo-1598887142717-f0289c743da0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMGhhaXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    Main_Heading: 'Salon for Men at home in Delhi',
    Sub_Heading_List : {
        First_Element : 'Branded Cosmetics are used-Loreal, Cheryls and O3+',
        Second_Element : 'Hygiene Friendly: Disposables items wipes, towels are used',
        Third_Element : 'Beauticians with minimum 5 years of experience' 
    },
   Packages_Box: {
       Heading: 'View All Men Services',
       Fields: {
           First_Field: 'Exclusive Packages',
           Second_Field: 'haircut and beardCut',
           Third_Field: 'Manicure + Pedicure',
           Fourth_Field: 'Facial & Hair Services',
       },
       Images : {
         First_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/categories/category_v2/category_e1f8fd10.png',
         Second_Image: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_portfolio_thumb,q_auto:low,f_auto/images/growth/luminosity/1612451138737-264418.jpeg",
         Third_Image: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_portfolio_thumb,q_auto:low,f_auto/images/growth/luminosity/1612451267059-25eb69.jpeg",
         Fourth_Image: "https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_portfolio_thumb,q_auto:low,f_auto/images/growth/luminosity/1612450053888-a545d8.jpeg"
       },

   },
   Services_Navbar: {
         First_Link: 'How it work',
         Second_Link: 'Beauticians',
         Third_Link: 'Blogs',
         Fourth_Link: 'FAQs',
         Fifth_Link: 'About salon at Home for Men'
   },

   How_it_Work_Column: {
     heading: 'How it Works',
     How_It_Work_First_Element: {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg',
           Text: 'Choose a Salon service',
           Sub_Text: 'Select from various salon packages & services',
       },
       How_It_Work_Second_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_899773a0.png',
        Text: 'Choose your time-slot',
        Sub_Text: 'We service from 9am-7pm',
    },
        How_It_Work_Third_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_89c4ec40.png',
        Text: 'Relax and enjoy salon service',
        Sub_Text: 'Our Professionals will get in touch with you an hour before the Services'
    }
   },
   Professionals_Rating_Column: {
       headings : 'Beauticians',
       Professionals_Cards_List : [
           {
               Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56b45626b637639e7eed43de/1521523493831-2ca9d8a1484b64ac8d045eb7818d27c6.jpeg',
               Name: 'Tripti Rana',
               Address: 'CR Park, New Delhi, Delhi, India',
               Commenter_Name_Alphabate: 'S',
               Commenter_Name: 'Shweta',
               Rating: '5.0',
               Comment: 'I want to give her all the compliments, Punctual, hygenic, polite, patient, well groomed, expert service and eye to details ',
               Extra_Comments: {

                    Commenter_Name_Alphabate: 'N',
                    Commenter_Name: 'Nitish',
                    Comment: 'She did a good job overall. My wife was very heppy with service'    
               },
               
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58ae9421d451ceb649f43089/1609232457477-293a6e.jpeg',   
            Name: 'Deepika Gupta',
            Address: 'Nihal Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'K',
            Commenter_Name: 'Kanika',
            Rating: '5.0',
            Comment: 'Best beauticians I have ever found perfect in her work super polite and very experienced',
            Extra_Comments:  {

                     Commenter_Name_Alphabate: 'A',
                     Commenter_Name: 'Anita',
                     Comment: 'Deepika Was hygenic, well groomed and she was really particular in giving a eye to each detail'    
                },
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56e913631a6caa5d3bd63392/1529904572825-48ffbd8125b5cfa09404db7446d74fe6.jpeg',   
            Name: 'Pooja Kumari',
            Address: 'Neb sarai, Block J, Saket, New Delhi, Delhi, India',
            Commenter_Name_Alphabate: 'D',
            Commenter_Name: 'Divyanshi',
            Rating: '5.0',
            Comment: 'Very friendly, understanding and knowledgeable service. Loved it',
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'P',
                    Commenter_Name: 'Preksha',
                    Comment: 'Pooja did an excellent job.. loved her service'
                }
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5a82b5c602614b5f007781aa/1536661908268-fae31dcd7c9cdb624c4e6a8d5e775b12.jpeg',   
            Name: 'Soni Srivastava',
            Address: 'Dwarka, Delhi, India',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/584fa25dd3269aee2c5c681b/1517894439202-74cb860b6ca0d57e8b1f36f4083e9089.png',   
            Name: 'Sandhya Sharma',
            Address: '3rd floor, JP House, Plot No. 172 Lane No. 2, Westend MArg ',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/568fb00f4e81d99c35b4bd51/1538118244891-6091599123fddd241b02b11366b95bf8.jpeg',   
            Name: 'Pooja Chauhan',
            Address: 'Budh Vihar Phase I, Budh Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'R',
            Commenter_Name: 'Revanshi',
            Rating: '5.0',
            Comment: 'I want ms.Pooja Chauhan again as my service expert next time too. Great service.' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58b5331e455dc84937b40ce0/1530073428870-b75256f2246d56c432c21ed9d14e044d.jpeg',   
            Name: 'Sanju Suryavanshi',
            Address: 'Naraina Village, Naraina, Delhi, India',
            Commenter_Name_Alphabate: 'A',
            Commenter_Name: 'Avni',
            Rating: '5.0',
            Comment: 'She was really superb at her work... PainLess Wax..' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
        
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5b879900519a69220036eb13/1535691152402-f6eb392710af7e289b36d08a44a84b6a.jpeg',   
            Name: 'Alka kapoor',
            Address: 'Sant Nagar, Burari, Delhi, India',
            Commenter_Name_Alphabate: 'H',
            Commenter_Name: 'Harpreet',
            Rating: '5.0',
            Comment: 'Good work and patient technician m. But Alka kapoor didn,t provide wax enough for a plus size person, also the aporn for waxing was very small. ' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'S',
                    Commenter_Name: 'Sudha',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        }
       ]

   },







//creating also lookes and  images carasou
Also_Looked_At_Services : {
    heading: 'People also lookes At',
    link_items_list: [
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bc824070.jpeg',
            text_lable: 'Massage Therapists At Home For Women',
            link:'',
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_3c671dc0.jpeg',
            text_lable: 'Microwave Repair Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a91b73d0.jpeg',
            text_lable: 'Electricians',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg',
            text_lable: 'Home Cleaning Service Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_f5a01e90.jpeg',
            text_lable: 'Disinfection Service',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_8d9f2900.png',
            text_lable: 'Beauty Service Professionals',
            link: ''
        }
    ]
},
 













   //creating services text names for services near me

   Related_Services_Column: {
     heading: 'Popular Services Near You',
     links:   [
       {link: 'Electricians'},
       {link: 'Microwave Repair'},
       {link: 'Cleaning Services'},
       {link: 'Salons'},
       {link:'Spa'}
    ],

   },


   
   Related_Services_Blogs_heading : {
       heading:'Popular Blog posts on Beauty'
   },

   Related_Services_Blogs_Carasoul : [
       {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/14180910/multani-mitti-face-mask-.jpg',
        textlable: 'Multani Mitti Packs: Everything About the Magic Mud',
        link: 'https://blog.urbancompany.com/beauty/multani-mitti-face-packs/'
        },

        {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/30163947/rose-water-for-dry-skin.jpg',
        textlable: 'Miracles Happen When You Use Rose Water for Dry Skin!',
        link: 'https://blog.urbancompany.com/beauty/rose-water-for-dry-skin/'},

        {
             image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/21190929/Rose-Water-for-Hair.jpg',
             textlable: '5 Reasons Why You Should Use Rose Water for Hair',
             link:'https://blog.urbancompany.com/beauty/rose-water-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/18153055/Threading-Do-and-Dont.jpg',
            textlable: 'What to Do (and Not Do) After a Salon Visit',
            link:'https://blog.urbancompany.com/beauty/dos-donts-salon-visit/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/11145102/rose-water-for-skin-feature-image.jpg',
            textlable: 'Best Ways to Use Rose Water for Skin',
            link: 'https://blog.urbancompany.com/beauty/rose-water-for-skin/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/12/25174046/apple-cider-hero1.png',
            textlable: 'Apple Cider Vinegar for Hair: Why Use It and How (Part 2)',
            link: 'https://blog.urbancompany.com/beauty/apple-cider-vinegar-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/06134012/lavender-1.png',
            textlable: 'How to Use Lavender Oil for Hair Growth & More',
            link: 'https://blog.urbancompany.com/beauty/lavender-oil-for-hair-growth/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25182257/new.jpg',
            textlable: 'Cocoa Butter Uses for Skin and Hair (DIY Recipes Included!)',
            link: 'https://blog.urbancompany.com/beauty/cocoa-butter-uses/'
        }
   ],








//creating object for latest customer reviews
    Latest_Customer_Reviews_Average_Column: {
        heading: 'Latest customer reviews',
        sub_heading: 'of Beauty Service Professionals in New Delhi',
        rating: '4.8',
        number_of_reviews: 'based on 789,789 reviews',
        view_more_comment: 'https://www.urbancompany.com/customer_reviews/delhi-ncr-salon-at-home'
    }
,










   

  //creating questions list for service page 

  Question_And_Answer: [
      
    {
       question: 'What are the different spa treatemnt for women you have ?',
        
    },


    {
       question: 'What are the add ons I can opt for if i book a spa for women at home?',
            
    },
       
    {
       question: 'How regularly should I get a spa for women treatment done?',
            
    },

    {
        question: 'Will there be a female or a male therapist?'

    },

    {
        question: 'Should I tell anyone about the allergies or medical conditions I have?',
    },
     
    {
        question: 'What should I do before a spa treatment?',
    },

    {
        question: 'Do I need to take  a bath after the spa at home treatment ?',
    },

    {
        question: "Can I use my cell phone during a spa at home treatment?",
       
    },

    {
        question: 'What should I wear for the spa for women?',
    }, 

    {
        question: 'Should I avoid spa for women at home If I am pregnant ?',
    },

    {
        question: 'I just got waxing done. Can I book a spa at home the same day ?',
    },

    {
        question: 'Can I gift a spa to a friend?',
    },

    {
        question: 'What is the minimum amount I can book for a spa for women at home service?',
    },

    {
        question: 'Will the therapist clean my house after a spa at home treatment?',
    },

    {
       question: 'What they actually do in spa service?',
    },
    {
        question: 'How to rate spa treatment?',
    }
]
,






    
    




    //creating state object for most asked questions and answer

   Modal_Question_And_Answer: {
      
       First_Element_Of_Question_Modal : {
           question: 'What are the different spa treatemnt for women you have ?',
             answer: 'Urban Company offers a lot of options that specifically cater to your needs. Here are some spa treatments that we offer' +
             'Aromatherapy Massage- The pressure intensity is low and it specifically helps in relaxing the body and calming the mind' +
             'Swedish Massage- The pressure intensity is medium and it helps in muscle relaxation and stress relaxation' + 
             'Thai Massage- - The pressure intensity is high and it helps boosting your energy, improves flexibility and relaxation of muscles' +
             'Deep Tissue Massage- The pressure intensity is high. It is great of pain relieving and easing chronic muscle tensions' + 
             'Body Scrub Massage- The pressure intensity is low and it helps in getting a youthful, vibrant and hydrated skin.'
        },


       Second_Element_Of_Question_Modal: {
                  question: 'What are the add ons I can opt for if i book a spa for women at home?',
                  answer: 'Apart from the spa treatments, Urban Company offers you a host of add ons that you can book. Whether it is a part of a package you choose (and save money) or alacarte:' +
                  'Face massage- A 20 minute face massage with low to medium intensity will leave your face glowing with improved blood circulation' +
                  'Head &amp; shoulder massage- A 20 minute massage with medium intensity will relieve you of headaches and any upper body tension' +
                  'Foot reflexology- A 20 minute massage with low intensity relieves stress and treats imbalances of organs connected to the feet' +
                  'Hand reflexology- A 20 minute massage with high intensity relieves stress and treats imbalances of organs connected to the hands'
        },
           
        Third_Element_Of_Question_Modal: {
                 question: 'How regularly should I get a spa for women treatment done?',
                 answer: 'The regularity of your spa treatments depends on many factors such as physical, emotional stress along with your budget.' + 
                 'You will feel the benefits after getting the treatment regularly. A spa once in a year or once in a while doesn’t really help.' +
                 ' Get a monthly massage to stay stress free and reap the many benefits that a spa offers.' +
                 'With the Urban Company wellness membership, you can get attractive discounts on your spa treatments!'
        },

        Fourth_Element_Of_Question_Modal: {
            question: 'Will there be a female or a male therapist?',
            answer: 'We only have trained and experienced female therapists.' +
             'Also as of now, we only offer spa treatments for women.'

        },

        Fifth_Element_Of_Question_Modal: {
                 question: 'Should I tell anyone about the allergies or medical conditions I have?',
                 answer: 'Yes. We recommend you inform the service professional about the same before you confirm the appointment. However, there no difference in charges and you will be charged as per our price points.'
        },
         
        Sixth_Element_Of_Question_Modal :{
            question: 'What should I do before a spa treatment?',
            answer: 'Yes. If you communicate with a therapist, the expert will be able to advice you better on the treatment and the pressure you should pick for the spa treatment.'
        },

        Seventh_Element_Of_Question_Modal: {
            question: 'Do I need to take  a bath after the spa at home treatment ?',
            answer: 'A spa treatment is designed to relax you. Here are some things you can do that can help you get the maximum out of a treatment at home:' +
            'Go low on caffeine' +
            'Try not to have a heavy meal before a spa treatment' +
            'Stretch a bit and get comfortable' +
            'Communicate with your therapist and let them know if the pressure is right'
        },

        Eighth_Element_Of_Question_Modal: {
            question: "Can I use my cell phone during a spa at home treatment?",
            answer: 'You certainly can, but we advise you do not. Getting a spa is' +
            ' to relax your senses and a cellphone will always keep you preoccupied.' + 
            'It is good to keep it aside while you are getting a therapeutic session done.'
        },

        Nineth_Element_Of_Question_Modal: {
            question: 'What should I wear for the spa for women?',
            answer: 'You do not have to worry about what to wear during a session. Our experts get every possible equipment needed for a relaxing spa, including what you can wear. The wearable gown is exclusively made available for clients and is not reused.'
        }, 

        Tenth_Element_Of_Question_Modal :{
            question: 'Should I avoid spa for women at home If I am pregnant ?',
            answer: 'If you are in your first trimester, it is advisable to not get a spa. Towards the later part of your pregnancy a spa can actually help. We advise consulting the therapist on what treatment would best work for you.'
        },

        Eleventh_Element_Of_Question_Modal :{
            question: 'I just got waxing done. Can I book a spa at home the same day ?' ,
            answer: 'Your hair follicles open up after you get waxing done. It is best to' +
             'avoid contact with excess moisture right after getting waxing done. Also if you have a sensitive skin, it may cause redness (and swelling) post waxing. Wait at east 24 hours to get a massage done.'
        },

        Twelth_Element_Of_Question_Modal: {
            question: 'Can I gift a spa to a friend?',
            answer: 'With Urban Company’s “Gift a Spa” service, you can book a spa for a friend or a loved one and gift them a day of pampering. Just log on to the app to find the service.'
        },

        Thirteenth_Element_Of_Question_Modal: {
            question: 'What is the minimum amount I can book for a spa for women at home service?',
            answer: 'The minimum booking amount for a spa at home service is Rs.999.'
        },

         Fourteenth_Element_Of_Question_Modal: {
            question: 'Will the therapist clean my house after a spa at home treatment?',
            answer: 'You can sit back and relax, for the therapist will clean up after every spa appointment and leave your home exactly the way it was.'
        },

        Fifteenth_Element_Of_Question_Modal: {
           question: 'What they actually do in spa service?',
           answer: 'Give you the time of your life.'
        },
        Sixteenth_Element_Of_Question_Modal:  {
            question: 'How to rate spa treatment?',
            answer: 'Our salon professionals use the best equipment which is sterile before use. They also ensure minimal dirt and clean up after they have worked their magic. Your home is definitely a safer and a cleaner place than any salon near your home (or anywhere for that matter).'
        }
   }



}















































































































//creating state for Massage for women service page
export const MassageForWomen = {
    Main_Photo: 'https://themassagestudio.com/wp-content/uploads/2020/02/bigstock-213685645-scaled-e1582218074209.jpg',
    Main_Heading: 'Massage for Women',
    Sub_Heading_List : {
        First_Element :'Trained female therapist',
        Second_Element : 'Hassle free service : massage bed, oils, music, candles, aroma',
        Third_Element : 'Hygiene friendly : disposable items like wipes, towels are used' 
    },
   Packages_Box: {
       Heading: 'View All Beauty Services',
       Fields: {
           First_Field: 'Exclusive Packages',
           Second_Field: 'Waxing & Threading',
           Third_Field: 'Manicure + Pedicure',
           Fourth_Field: 'Facial & Hair Services',
       },
       Images : {
         First_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_74dab710.jpeg',
         Second_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/categories/category_v2/category_e8821d60.jpeg',
         Third_Image: 'data:image/jpeg;base64,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',
         Fourth_Image: 'data:image/jpeg;base64,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'
       },

   },
   Services_Navbar: {
    First_Link: 'How it work',
    Second_Link: 'Therapists',
    Third_Link: 'Blogs',
    Fourth_Link: 'FAQs',
    Fifth_Link: 'Massage At Home'
},

How_it_Work_Column: {
heading: 'How it Works',
How_It_Work_First_Element: {
      Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg',
      Text: 'Choose a Salon service',
      Sub_Text: 'Select from various salon packages & services',
  },
  How_It_Work_Second_Element: {
   Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_899773a0.png',
   Text: 'Choose your time-slot',
   Sub_Text: 'We service from 9am-7pm',
},
   How_It_Work_Third_Element: {
   Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_89c4ec40.png',
   Text: 'Relax and enjoy salon service',
   Sub_Text: 'Our Professionals will get in touch with you an hour before the Services'
}
},
Professionals_Rating_Column: {
  headings : 'Therapists',
  Professionals_Cards_List : [
      {
          Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/59aea6aef435855d00231904/1504852121389-878c03d18926e28dab792f7b0f35eee3.jpeg',
          Name: 'Tripti Rana',
          Address: 'CR Park, New Delhi, Delhi, India',
          Commenter_Name_Alphabate: 'S',
          Commenter_Name: 'Shweta',
          Rating: '5.0',
          Comment: 'I want to give her all the compliments, Punctual, hygenic, polite, patient, well groomed, expert service and eye to details ',
          Extra_Comments: {

               Commenter_Name_Alphabate: 'N',
               Commenter_Name: 'Nitish',
               Comment: 'She did a good job overall. My wife was very heppy with service'    
          },
          
      },
      {
       Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58f6fc35c1baa80114ee69cb/1492676994320-5f0f54d102b4fa5ad4862bf72958a732.jpeg',   
       Name: 'Deepika Gupta',
       Address: 'Nihal Vihar, Delhi, India',
       Commenter_Name_Alphabate: 'K',
       Commenter_Name: 'Kanika',
       Rating: '5.0',
       Comment: 'Best beauticians I have ever found perfect in her work super polite and very experienced',
       Extra_Comments:  {

                Commenter_Name_Alphabate: 'A',
                Commenter_Name: 'Anita',
                Comment: 'Deepika Was hygenic, well groomed and she was really particular in giving a eye to each detail'    
           },
        
      },
      {
       Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5aab6da860fe0e5f00790341/1521201117549-32e33b267430edf24b770097209a661a.png',   
       Name: 'Pooja Kumari',
       Address: 'Neb sarai, Block J, Saket, New Delhi, Delhi, India',
       Commenter_Name_Alphabate: 'D',
       Commenter_Name: 'Divyanshi',
       Rating: '5.0',
       Comment: 'Very friendly, understanding and knowledgeable service. Loved it',
       Extra_Comments:  {

               Commenter_Name_Alphabate: 'P',
               Commenter_Name: 'Preksha',
               Comment: 'Pooja did an excellent job.. loved her service'
           }
        
      },
      {
       Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5746c948e24e8a9079d75a87/1464422974637-bb6e4c93b2da9cacaeb22648c5ff6e7c.jpeg',   
       Name: 'Soni Srivastava',
       Address: 'Dwarka, Delhi, India',
       Commenter_Name_Alphabate: 'S',
       Commenter_Name: 'Seema',
       Rating: '5.0',
       Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
       Extra_Comments:  {

               Commenter_Name_Alphabate: 'V',
               Commenter_Name: 'Vinita',
               Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
               'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
               'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
       
      }
   },
   {
       Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5739bac1043aec0310980fb3/1533797616409-3e7de6e5531117307350e591b3b074c1.jpeg',   
       Name: 'Sandhya Sharma',
       Address: '3rd floor, JP House, Plot No. 172 Lane No. 2, Westend MArg ',
       Commenter_Name_Alphabate: 'S',
       Commenter_Name: 'Seema',
       Rating: '5.0',
       Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
       Extra_Comments:  {

               Commenter_Name_Alphabate: 'V',
               Commenter_Name: 'Vinita',
               Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
               'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
               'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
       
      }
   },
   {
       Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/595f8046d9717e5d00104dcc/1499925069985-18ce4e40fab9fca5f78a8d583b37f7b5.jpeg',   
       Name: 'Pooja Chauhan',
       Address: 'Budh Vihar Phase I, Budh Vihar, Delhi, India',
       Commenter_Name_Alphabate: 'R',
       Commenter_Name: 'Revanshi',
       Rating: '5.0',
       Comment: 'I want ms.Pooja Chauhan again as my service expert next time too. Great service.' ,
       Extra_Comments:  {

               Commenter_Name_Alphabate: 'T',
               Commenter_Name: 'Tuhin',
               Comment: 'Excellent service and on time and very good at her service and takes case lot',
       
      }
   },
   {
       Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/590413e0d8ac675a148c37dc/1521811884732-9ea57e1bdbaa98881f6b217e397dfe88.jpeg',   
       Name: 'Sanju Suryavanshi',
       Address: 'Naraina Village, Naraina, Delhi, India',
       Commenter_Name_Alphabate: 'A',
       Commenter_Name: 'Avni',
       Rating: '5.0',
       Comment: 'She was really superb at her work... PainLess Wax..' ,
       Extra_Comments:  {

               Commenter_Name_Alphabate: 'T',
               Commenter_Name: 'Tuhin',
               Comment: 'Excellent service and on time and very good at her service and takes case lot',
       
      }
   },
   {
   
   Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5b4c338b9dc21f220082b063/1533711629518-35d2c6b35231e91f5131f0bd2b69748a.jpeg',   
       Name: 'Alka kapoor',
       Address: 'Sant Nagar, Burari, Delhi, India',
       Commenter_Name_Alphabate: 'H',
       Commenter_Name: 'Harpreet',
       Rating: '5.0',
       Comment: 'Good work and patient technician m. But Alka kapoor didn,t provide wax enough for a plus size person, also the aporn for waxing was very small. ' ,
       Extra_Comments:  {

               Commenter_Name_Alphabate: 'S',
               Commenter_Name: 'Sudha',
               Comment: 'Excellent service and on time and very good at her service and takes case lot',
       
      }
    }
]
},
//creating also lookes and  images carasou
Also_Looked_At_Services : {
    heading: 'People also lookes At',
    link_items_list: [
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bc824070.jpeg',
            text_lable: 'Massage Therapists At Home For Women',
            link:'',
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_3c671dc0.jpeg',
            text_lable: 'Microwave Repair Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a91b73d0.jpeg',
            text_lable: 'Electricians',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg',
            text_lable: 'Home Cleaning Service Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_f5a01e90.jpeg',
            text_lable: 'Disinfection Service',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_8d9f2900.png',
            text_lable: 'Beauty Service Professionals',
            link: ''
        }
    ]
},
 













   //creating services text names for services near me

   Related_Services_Column: {
     heading: 'Popular Services Near You',
     links:   [
       {link: 'Electricians'},
       {link: 'Microwave Repair'},
       {link: 'Cleaning Services'},
       {link: 'Salons'},
       {link:'Spa'}
    ],

   },


   
   Related_Services_Blogs_heading : {
       heading:'Popular Blog posts on Beauty'
   },

   Related_Services_Blogs_Carasoul : [
       {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/14180910/multani-mitti-face-mask-.jpg',
        textlable: 'Multani Mitti Packs: Everything About the Magic Mud',
        link: 'https://blog.urbancompany.com/beauty/multani-mitti-face-packs/'
        },

        {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/30163947/rose-water-for-dry-skin.jpg',
        textlable: 'Miracles Happen When You Use Rose Water for Dry Skin!',
        link: 'https://blog.urbancompany.com/beauty/rose-water-for-dry-skin/'},

        {
             image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/21190929/Rose-Water-for-Hair.jpg',
             textlable: '5 Reasons Why You Should Use Rose Water for Hair',
             link:'https://blog.urbancompany.com/beauty/rose-water-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/18153055/Threading-Do-and-Dont.jpg',
            textlable: 'What to Do (and Not Do) After a Salon Visit',
            link:'https://blog.urbancompany.com/beauty/dos-donts-salon-visit/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/11145102/rose-water-for-skin-feature-image.jpg',
            textlable: 'Best Ways to Use Rose Water for Skin',
            link: 'https://blog.urbancompany.com/beauty/rose-water-for-skin/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/12/25174046/apple-cider-hero1.png',
            textlable: 'Apple Cider Vinegar for Hair: Why Use It and How (Part 2)',
            link: 'https://blog.urbancompany.com/beauty/apple-cider-vinegar-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/06134012/lavender-1.png',
            textlable: 'How to Use Lavender Oil for Hair Growth & More',
            link: 'https://blog.urbancompany.com/beauty/lavender-oil-for-hair-growth/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25182257/new.jpg',
            textlable: 'Cocoa Butter Uses for Skin and Hair (DIY Recipes Included!)',
            link: 'https://blog.urbancompany.com/beauty/cocoa-butter-uses/'
        }
   ],








//creating object for latest customer reviews
    Latest_Customer_Reviews_Average_Column: {
        heading: 'Latest customer reviews',
        sub_heading: 'of Beauty Service Professionals in New Delhi',
        rating: '4.8',
        number_of_reviews: 'based on 789,789 reviews',
        view_more_comment: 'https://www.urbancompany.com/customer_reviews/delhi-ncr-salon-at-home'
    }
,










   

  //creating questions list for service page 

  Question_And_Answer: [
      
    {
       question: 'How long does the hair to be for waxing ?',
        
    },


    {
       question: 'What should I do to prepare for waxing?',
            
    },
       
    {
       question: 'Does waxing hurt a lot?',
            
    },

    {
        question: 'What are the types of waxing services available with you?'

    },

    {
        question: 'If I have my own wax and brand, can you use that?',
    },
     
    {
        question: 'How long will it take for the hair to grow back?',
    },

    {
        question: 'How often should I get waxed ?',
    },

    {
        question: 'I used a razor once. Will it hurt to get waxed now ?',
       
    },

    {
        question: 'Does waxing also help in removal of tan ?',
    }, 

    {
        question: 'I have never been waxed. Is there something I need to be careful about ?',
    },

    {
        question: 'I am on medication. Will it affect my waxing?',
    },

    {
        question: 'Can I get waxed if I am pregnant?',
    },

    {
        question: 'What is meant by double dipping?',
    },

    {
        question: 'Is eyebrow/upper lip waxing better than threading?',
    },

    {
       question: 'Is face wax safe?',
    },
    {
        question: 'Will it be hygienic to get waxed at home instead of salon that provides waxing near me?',
    }
]
,






    
    




    //creating state object for most asked questions and answer

   Modal_Question_And_Answer: {
      
       First_Element_Of_Question_Modal : {
           question: 'How long does the hair to be for waxing ?',
             answer: 'The longer the hair, the better the wax will grab the hair and will pull it out.' + 
             'Ideally one can wait for 3-5 weeks before getting waxing done depending on the hair growth.' +
             ' In case of emergency in the face of an event you need to go to, we suggest you wait for at least 7 days before another round of body waxing.' + 
             'A word of advice- never clip your hair before your waxing day.'
        },


       Second_Element_Of_Question_Modal: {
                  question: 'What should I do to prepare for waxing?',
                  answer: 'Although our salon at home professionals will do everything possible to make this process as pain free and satisfying as possible, there are certain things that you can do to ensure a great waxing session:' +
                  'Ensure the room you get the service done is air conditioned (unless it is winter)' +
                  'Exfoliate the skin lightly' +
                  'Moisturise till the day before your waxing appointment' + 
                  'Let the hair grow. Longer the hair, the better' +
                  'Check yourself for burns, cuts etc. We recommend you treat it before getting waxing done or inform the professional' +
                 ' Let the professional know if you are allergic to anything particular to the service'
        },
           
        Third_Element_Of_Question_Modal: {
                 question: 'Does waxing hurt a lot?',
                 answer: 'The process involves ripping out the hair from the follicle and it is a painful process.' +
                 ' However, the pain threshold for waxing varies from person to person. Those who have thick hair, sensitive skin and/or getting waxed for the first time particularly undergo more pain. ' +
                 'That is why it is highly recommended to go to not just pros but skilled salon beauty professionals. Our professionals undergo a rigorous training process before being a part of Urban Company, despite having years of experience in the field.' +
                 ' This ensures that you get the desired result with minimal inconvenience.'
        },

        Fourth_Element_Of_Question_Modal: {
            question: 'What are the types of waxing services available with you?',
            answer: 'We offer:' + 
            'Rica wax for sensitive skin' +
            'Rica peel off wax ' +
            'Regular wax'

        },

        Fifth_Element_Of_Question_Modal: {
                 question: 'If I have my own wax and brand, can you use that?',
                 answer: 'Yes. We recommend you inform the service professional about the same before you confirm the appointment. However, there no difference in charges and you will be charged as per our price points.'
        },
         
        Sixth_Element_Of_Question_Modal :{
            question: 'How long will it take for the hair to grow back?',
            answer: 'Everyone does not have the same growth pattern or the rate at which hair regrows. Some are lucky to even not have a re-growth for months.' +
            ' Even your ethnicity affects your hair growth.' +
            ' However, on an average 4 weeks is the time it takes for your hair to come back.'
        },

        Seventh_Element_Of_Question_Modal: {
            question: 'How often should I get waxed ?',
            answer: 'If you are getting waxed for the first time, start with getting it done every 2-3 weeks for at least 3-4 times.' +
            'This also helps in prevention of ingrown hairs to grow. After that it completely depends on how noticeable the hair, how much it bothers you and what is your salon budget.' +
            'On an average waxing is done every 4-6 weeks.'
        },

        Eighth_Element_Of_Question_Modal: {
            question: 'I used a razor once. Will it hurt to get waxed now ?',
            answer: 'Always avoid a razor as it not only results in cuts and scrapes but also makes hair harder and darker the next time it comes.' +
            ' Waxing becomes a painful process when hair is harder (and smaller).' +
            'Since waxing pulls the hair from the follicles, the hair that comes back is always softer and weaker. Hence, easier to pull.'
        },

        Nineth_Element_Of_Question_Modal: {
            question: 'Does waxing also help in removal of tan ?',
            answer: 'Waxing sticks to your skin and removes the top most layer of it.' +
            'Hence, it not only exfoliates the skin but also removes significant tanning.'
        }, 

        Tenth_Element_Of_Question_Modal :{
            question: 'I have never been waxed. Is there something I need to be careful about ?',
            answer: 'Here are some tips that can make the process easier on you:' +
            'Follow the steps for reducing the pain (given above)' +
            'Experiment with the kind of waxing to know what suits you the best' +
            'Do not trim your hair before you get waxed' +
            'Do not shave in between waxing sessions. The hair will be shorter and difficult to take out and you will also have more ingrown hair.'
        },

        Eleventh_Element_Of_Question_Modal :{
            question: 'I am on medication. Will it affect my waxing?',
            answer: 'Yes it does. Certain medicines make the skin sensitive by thinning them out. This makes it more likely for your skin to burn or peel during a session.' +
            ' Please let the salon professional know the medicine that you are on so they can recommend you the type of service you should go for.'
        },

        Twelth_Element_Of_Question_Modal: {
            question: 'Can I get waxed if I am pregnant?',
            answer: 'Yes you can. However, during pregnancy your skin is extra sensitive and needs to be treated with hard wax.' +
            'Ensure that the professional knows about your pregnancy and always go for the trained salon specialists from Urban Company.'
        },

        Thirteenth_Element_Of_Question_Modal: {
            question: 'What is meant by double dipping?',
            answer: 'Double dipping is the term used when a professional dips the same stick used in waxing back in the wax after applying it on you or anyone else.' +
             'Our professionals use fresh sticks to avoid bacterial infections and use sterile methods to apply wax so you don’t have to worry about contracting an infection.'
        },

         Fourteenth_Element_Of_Question_Modal: {
            question: 'Is eyebrow/upper lip waxing better than threading?',
            answer: 'Waxing may always not work for removing the unwanted hair off your body. In this case, threading your eyebrows and upper lip is better than waxing because:' +
            'It gives a better shape to your eyebrows' +
            'No chemicals involved' +
            'Works better for sensitive skin' +
            'Lasts longer ' +
            'Quick and less painful' 
        },

        Fifteenth_Element_Of_Question_Modal: {
           question: 'Is face wax safe?',
           answer: 'Facial skin is sensitive and needs extra care than the rest of the body. It is perfectly safe to get your face waxed but you need to get it done by a verified and a skilled salon professional, like the ones available on Urban Company.'
        },
        Sixteenth_Element_Of_Question_Modal:  {
            question: 'Will it be hygienic to get waxed at home instead of salon that provides waxing near me?',
            answer: 'Our salon professionals use the best equipment which is sterile before use. They also ensure minimal dirt and clean up after they have worked their magic. Your home is definitely a safer and a cleaner place than any salon near your home (or anywhere for that matter).'
        }
   }



}




















































//creating state for Massage for Men service page
export const MassageForMen = {
    Main_Photo: 'data:image/jpeg;base64,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',
    Main_Heading: 'Massage for men',
    Sub_Heading_List : {
        First_Element : 'Trained Male therapist',
        Second_Element : 'Hygiene Friendly: Disposables items wipes, towels are used',
        Third_Element : 'Hassle free service: massage bed, oils, music, candles, aroma' 
    },
   Packages_Box: {
       Heading: ' Massage Services For Men :',
       Fields: {
           First_Field: 'Exclusive Packages',
           Second_Field: 'Head Massage',
           Third_Field: 'Upper Body  Massage',
           Fourth_Field: 'Full Body Massage',
       },
       Images : {
         First_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/categories/category_v2/category_e1f8fd10.png',
         Second_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_ce6d9e00.png',
         Third_Image: 'https://www.wellnessworxflorida.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-26047940/images/596f9fa5cd1cdwCGbmBP/malemassage1-from-website_d800.png',
         Fourth_Image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFhUXFRcXGBgYGBcXGBsVFRUXFxUYGBgYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHR8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABDEAABAwIDBAcEBwcCBwEAAAABAAIDBBEFITESQVFhBhMicYGRoQcyUrEUQmLB0eHwFSNygpKisiTxFjNDY3PC4oP/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAmEQACAgEDAwQDAQAAAAAAAAAAAQIRAxIhMRNBUQQUIjJSYZFC/9oADAMBAAIRAxEAPwBtg3VuB2s7WsL5psxxdpoFRuj9W+7nOaS0nsjfYb1aoq3/ALbv6kkI0g5JWx+0HeAQiYeNiEHC7IOA1HEouGZx3DxCsRYXHMfhuuOe1rCpPpzJXD93K1jWnmz3geed115tWRrH5JF0/om1dHsRgul62PZyNw5zg0nkACblajRatWc6qqNsGHzEAOJacyBfPhwXMw8rvNX0DqZIeocWBpABIebkDvagY/Y7FbNr78et/wDlKHV5IPYbhdoZ6p2r3iNv8MYu4jvc638i6JI0bVzoouiuBso6VlO05NLic75veXHPfrbwTOaMEJWMCsY0CwACHknYNXEeCmkjFskHUutkcwshWb3Y73Xi/wCtyGqg4ahCSQMJzFuYuF4HyN91+0ODvxT6QKdG7HOBu3xadPyUzHNfp2XfCfuO9RNrGaPaWHju81K+mDhkQ4evgUBrMgbYvGmmuW/9ZobrNicHQODh42ufkiWtkbkRtNItmLkd5GoVexutsR2XAtNxmCLcOJH6usMlbH9DMWuFvHuVhikDhkq5hbQ4BwzuAfAph+1YIffkaDwB2nf0i5RuhWr4GYjuiIY1Vp+lu6KO/wBp+Q8GjM+YQv7Ulk995twGTfIa+KlLPFcbjxwSfJDNSiKV8Ytsh3Zsb9k5tz42ITJtYWsBvx9P90BXCzg/c4f3DL5WQfSCo2KOZ41jaXeFrFc+N1M6csW4HMumeLmoq5JQbBp2G2Nvd1I8bquyXNrknvJPzW7dBc56nvOZWELuo4SGx4KN3epJHgaIclYZGwHNbBaBbBazUeHvUkRUbhkvGrGosGCAmRjbZOc1v9RAv6rvWF9BKZjbOBeTvJ+S+esNeQ5r2G0jSDY6Gxuvp3DMVY6Jj9r3mNPmM1pKxU2thO/2e05ORKxWYYoz4gvEmlDav2cZwaAtaCXWePqnSwysQVaTThwbYZuGnPeuY4P07Bsyqjv9to+bfwV1wurY8B9PPccL3t3g5hMmK0P2wuaBZxHd+CcYfX3Aa82dxtkfwKW4XUPc7q5Gg8HDd/Em4oDY5Ajkc0RQt1jqLLSCMhxs4NO42vfkQo4nuA2dlxHPK3ipmyRggOOyTpnnlwRAHSmf6vVnv2gg5qmoZ2pDEG33bRJ7ro44pH8Q80qxk9a9tj2Q31J/2SsdJMjFUZDYaIp1U1oAcdVDBEGtUFYBs5pBzJ5xfI5IV0l8io3ZCyg21gm74zoEKXkZEdyKid4qZ1OHBUiyUogjHhwtsj7lo2iN+zcdxP3KU0rgRkt31Wxl5lFiJtcGlnFpG3IPMeqQYzgpLSS8+J+4ap86qJ5ISvtYpWkUUpHO8RnnA2Otk2RkBtECwyGQNrI7DHiwI35qLEoDLL1QJtq8jWx0aO/5d6bzUZEMZ2AHsA6zYuW52tY8G6LnlFyTfg7YyUaT7hVO9GxvSammTCKVcx0IcU7w4Fh36cjuKx1MHNdG8XY9pY4cnCxQEUiaCa4Dv1dBgo4TiNIYJXwu1jcWnnbQ+IsfFCSPV49qeH7MsdQ0ZSN2Xfxs0PeW/wCKoT16MZaopnnyjpk0auWqwry6ID1etWq9G9YxuY+C8LCt4peIuphKOCICOMHK2q6dQY5s08TQbuDBcX4LnFO+xva55pvUU8gbG8A2Ld2aErrYaFXuXJvSyO2bysVUbDMRfqb89hYo/Mv8CnEorC2SulYyAuEjyGt2SQSTxtuQq7D7Nuigp2iomH754yHwMO7+I71Qgy59HKHqIGNllc94AuTm5x39w4IqHG3hx/dtazm7acfLJvqqfiWJO62Vu1YbVvAaWUcGIZWuuPJlndI6ceGFWxlidRij3PEdRTtjJOzdjtoN3A52vzSaDo9XvlilmrGuLC7QOsWu1FsgO9HsxDmjoa8cUvuciH9vjYT+zHkW2wT3J9hdA6GNrHm7tTyvuHcPvS7C6oFzbZm4PlmrZI8OFxwV8OSU09Rz5sUINaQKIISrbe44Keor4x2Qc+PNQNcDmrEhbO/RQSDeEXUR6oIjcshiWE5oynfZ1ilsZKYwN2rZaJ0Iyd7C0a7/AES2pF7pp1h0KDqGNRFoUbdskBiVXZpsNo5AAalxNgB3khe4lVtYdkvAJ8clZui4pgGuFjJ8bsz3N3NUpTV0VjClqoh6DdDzFaeoALz2g0/EdXuG47g3cAN+lzqo2OY6NwuxwLSOIIsUBVYsyPLU8LgeZKG/bjCQDv3jOw5rKlsCUnJ2cuxaidTTOiduOR4tPuu8vW69p5lafaC+KZgc0gPj0JIG006jnxHjxVFp57Lnmqex24pWtywMkRuH1H1Scj80khmuiY371JlqNOntN1lFJlnGQ/uLTZ3oSuPOXbqtwkhew/WY5p8WkLiJb9pdPp3s0cfqI1JM1XhC92ea8JXQQPFj3ZWXhcoQ5YxPG5SBwULDvWArGoNpRnquoYAR1EeWeyuYUjreK6Ngs14Wch96ZCNblmiOQWIRs2SxazaTmfQbB+um614vHEQTwc/6rfDXyXWm14aBx+9Ufo9GYqSIaFwLz/Obj0srv0FoGz7csjdprSGtB02rXJ55WU6GYhx6gmfKXxxPcHZ3a0nPek+y9hs9r2E7nNIHmu4xEAWtZB4lhbJAQWgqbxIeOZpUcd+lkGy2+nHcck96QdFnsu6Nu0OG/wAEN0Wwxji6WVpLWGwY4ZF+p2hvAFst9xzUelbousqqy89E8NLYGvsS94DiT9Vp0aL8tfyTWoaQC0b9w3oOh6UgdmRmQ0I9MkybiEThtNa4jeRbL1XQo6VSOZy1O2KJKBx1NlFTyOjNjmE7FRG7IPHccio5qNpz1PotuHY1a1kguDnwS+rw07lMactIcL8+5azRPDjsO8+aZC8C2Njr2tmjI3EsNjaxUFS+YG9ge7VeUFQHXFrE7uaJqsicDfNxPiqZ0qa6KYBkjwS3adZztSTYa8vVXWXI6JditDHIC6Rtsrl+lhbedD4qc+CkHTOe5k3JJPEm5TPDMWdGdckTVYE5vabvz2dHAbrjjyuUtmh2TZwseeS57T4OmmuS401fFLbb2v5XFpPkc0zp8NoHH3QXfbc7a9Tdc7jkIyuijiDstrtDnr5pWg0joI6NUodtdV6mypHSrDvo85DR2HdpnLi3wPoQpKbHNkWD3s/mNvL8kLjGM7cWw+Rrs7i4O008Q7huQjFoa0RUtRuTGORVOGr33TGDEhoMzyRaHTLLC65A4m3mVzPpn0bloKp0MmYN3RvGj4yciOBGhG7yXSMCY6R4cRYAg6XvY3zOgTfpb0fixDYM5eDG0tYWENsHEE5EEHQJsWRRuyOaDnVHAyVqukTeyl+0dirbsbtph2/EA2Pf6LR/sqk3VTT/APmR/wC5XR1oeSHRn4OdyuyUTQrzV+zGqHuyQuHe9p8i0j1SqXoPXtJ/0+1be18Z/wDa/oj1IPuL05LsV4r0JnL0drG+9ST94jeR5gEJaBnY5Eag5Ed4T3YvAZS3sr/gmULP4b+q531hyGi6BSusxg+yPkmsCW4165eIIFYgNRo8WjYbk9hmv8IyXR+g8WxRR/aLnnxcbegC5TVVpLGNOQaLAd29ddwMWooAN0TD6AlaicuBw85X5qammvkhGyXaeX+6hdLs9pAQaywNOoVPnjc9z9lpDQTbLXPIq20dRcZ62S9923ad9/AD7gsEU0AYDaQWIz7xvRvWw7dmSFjuNiAeV96DZTuneXCwA0vvssxFlh226bxxQHQXPJCcnPaXcWg+v5IfrJI843bbeF1HSESDZeO0NDvIUEkLmHIrUGxpS4w1/ZcS13DRFkA5pC5rXizhnx3+ange+Eb5Gb/iH4hEDQxcfFBVNMSdsDPf4aIxlS17dpuY5IeSqt9UoMyPZRdueV1X8Qqy6Us+pEGm3GR2bfIWPeRwTaYuc0ki2htxAcCbnuuqZBVvezrHntyHbdbIXdbQcFzepl8aOj00blZPWSkm90VQ1uVnC44GxHkUAJFH1ljkuNWjudDHFsNZK28bWteOAAB5G3zVYf2bteLEKxU9RvvklWNziQgAC4+tv7lWEnwyUkuwqxFnVgFx2QeKWsjfLp2WfE4a/wALd6czR9YGscNoNIOfEI6GiFs800siRlBsrVPhIvYFzu/8lZ8KwtrbFzb8rZIyngDdAmIlcRYZKEsllowoIp6xjchlwA0RsU5dmNELR0oObgrBBE1oyCEbZpUgNjTwWwRMhAzBsVptA96o1RO7IjGConUlz9yIsiGZLVZroCFIRoSO5ZNgscv/ADWsk/8AKxsn+QKZAhQTaZFMlQrdlcxL2f0D/wDoCM/FC5zP7DdvoldZ0QkYP3L+uaB7ttmQAfZ0d4eSs01U5pUf0y+qos8kK8CZQyLZHIjIg5EHmFivjqhxzOy48XNaT4kjNeqnul4J+3fk5BjTthr3bxp3rs3RSXboKdx3wR/4hcl6RUwcHAaOFx8wun+zl+3h1OPhj2T3tJFvRdbOOXA6pZLO2DvCClkLMnaXHldTTZWcBYtPmEPj1Q1sTpTo2xtz4eKBMyt6UQ09Q2J5Fi3tvvkwusWX5W14XCcVZErWhrgbi+03MEHu3LiUtQZHFzsy4knxUuE4rNSvMkLyPsHON3G7fvFilsdI7WKTqrEd2S1qnNI7TQTuVf6MdPoKm0b7QznLYcew8/8AbcdT9k2PenNVJ8OfIn5ImA3ts7aAsiZQ1wz3oKSUu8NynkZcZfVN/BZBZEKYjPWxFlLGCM9yjdI/dYd60FzbbF+P3LUCz1zGbV2P2H8tD3jepS9w94DvGh/BLKyFp0yI0IyQ+2/eT4oMdbhXSLGG09NLMbXaw2HF2jB4uIHiqbRyB0bCPgb8ko9qWJkCGnvxld/jHf8AuPkguiGK32YjqMh3HTy0XNmi5Rs6MElF15LNM6yCEtyisQCXtyXPFHS2FzVGVgsggNu9DxC5T2nhyRk6QIq2QU9LZGsg0UsUSPigyzXO2dCQCyDkjYoLare7WgpfVYlnYIUGxwx4C2E1t6RtqyVI2stvRToDVjvrb7166QtF0oZXcURHiI35hOpCOISK7Oxv+gmML7jVCwyxO0I8UQ0tToVojlBvkoXbQ3ouSVo0S+pqTxWbClZ7KN5/XkgJnAaFD1NdbV1komxyIbyTyH4oJSfAW4x5Y765YqyekMX2/IfisTdOXgXqQ8i2q7UYPDJW/wBm8n+ia5tw5kkwy3jrHGxG/Vc8qMT2GWte/E77WVx9l1ZenlHCc/3NafxXpRe1HmZF3L7MNppe3P4hvaeNuCp3TnEf3EcY1LyTzDRl6u9FZ+tLTtA2P681QPaBUk1DQQBaMaaElxz8rIskuRTA3s7SFmeiJ5NloA4C/ilE7990hRGtQwFWTo703mgsya80elyf3jRycffHI589yqxctCsE73heIw1EYkjcHtOW0NR9lw1B781tU1OybbNwcrjTIfj8lw/CcXmpn9ZC/ZJFnA5scPtN39+RCumE+0Zhs2oiLD8cZ2h/M3XyumQGi9slDhcFRvnPBDYfilPUC8UrH8gbOHe3UeIU00ZAyWYKNC9pF1OzC5C3bLDbc24BPffQJQ6ZzpBFb3jmSbADeTwAXQW10VrB7bDIZjQJORnscV6UezWsqJXTtmie5x9w7TC1oFmtaTcGw7rqpjotWUkrHyROAY9rjqcgRexGRyX0lJIw7whZ7EWNnDgUHwFSOV4hmLjQ/elz1belGEixfFlxZu/lP3Kj/SRmFyaWjtUlJDCiF3DvVmghvYBU6gmJcGjM3FhzXQ6KCwCnl2KY0SU1MAp3RKRuS1dIoFgSuoA9uWR3FU+sBY/YeCD8+YV4M9kqximbMzZdqNDvB4hOmKVr6Ud2qmZUX3pPU7TLseLOGh48wgf2kW5Oy5qixg1lq60bytXVTR9ZVo4jfeo3VN0dANRYziwGhKb4dVveLgEqoYYwOdnorUK3YYXaNA+SV7bIouLYfU1YibtSuDR5kngBvVbxLpMTlGNkfEbE/kq9iWKPmeXu8BwG4BLXTXvfT9ZLphhS3ZxZM7e0eAurxJziXON0rnrRqT5fio3yXOnhuC0Oze5F/NWSINmpxA8Heaxbkt3tN/FYmAS4oPd8VbvZTP8A89g122O9HD7lV60sLCSbEXsBnc8b7k09ltRapkb8Ud/6Hf8A0mjyCfB18zbTbnVc19oD/wDU3+w371eY5yHclRvaJH+8Y/c5pHi0/gQnaIx5FNa+xSuVyKqH3APEA+gQMjlMqaAry/NeEry6JjfaWq1uvAUDErHkEEEgjQi4I7juVjwrprVR5Od1zeD/AHvB4z87qsbSy6wTqOHY51o6xl23yIJzFu7UJjSYi4utoVz3o/XbDbc8+V1dIBkHHXUclGRRIscOIPHBTjETvASSOYkaLfrDwSpsLgmNJ6lrhm31VN6RYSxxLmjZd8QyPjx8U8LnIyjw8ntPz4D9b0sp0Pjx29hD0P6OOj/ezW2zk0cG8TzPoFc44wFHey1dKuObt2ztiqVEsslkFNOOKx8xS2WUXJGpShJZZlB1ygfJdQvkVIoRszEadkzbOHcd4PJVbEsPDQQc0/mn1SXEJLg3VEAqjbtcW3y3IgSkILEpLP8ABRx1F106bVkNVOiz4VML2unuKXMDwOHyVQweXtgq3U7wc3bWzxbbIaZ3XPJVI6sa1xaKLJLlZamTLMo3pBC1krmtta/6y7vmlZK7E7R5046W0eXJ3kBeNYMhe2ea0Ls1Eb3OaYQNDG8fVYgQSsWMFVR7Hij+gFTsV0f2g5nmLj1CWVDbM8VDhdR1c0UnwyNJ7gc/RVl9mK90dznBBuk3TaEPpCbZsc0jxyPnf5J4192g32hZKulNhSPA+z/mEXwRXJzWGW7LfDkfmP1yUDytz2XX46rSZuamWI9peXWpXoKxj0r268JXl0DHpWBarAgMGUTyHtHE28/zC6kyO5DRuAXLMLF54Rxkb5XXbcEpxtEnVK0MpUiKDDnndbmjo8JcRe/erFDCLaITG5diOw9552R3fWPl80klSthjJydIS09OL8bI7ZQ8A2QtutXDKTbtnfGNKkbPYo+rXhqBvWjqgcUgx5IxJ8Qgyu3UbuKaPmFkuqHXRQGKRNdeOelmOVIiO3fI5HvSv/iBnxAeitGDZJzSHlS9I8RnACFqMcadDfuSyZ0kmgsOarGArmLax+0SUJt2KcjCSfeJPdkvf2RbTP5+SumkQabNMKnz1zVkrmuDGyMDi4OFgLns7OeQ1uqvJRWzGRVwwCbsNJ+H8FLIq3OjBN8CLGmkv2rW2mNdncHRJHlW3pPK0taN99eVlU5xqqY38SGf7shBXh1717dRyFUImFerS6xYwZUe4e9LimVR7hSxVn9mDsXHoV0sMJEMzv3Rya457B3A8WfJXTphUNdTCxtd7eYOTrG+8LjSs2B1UjoDG5xLGu7IOgNs7eYQsRruRVEeaH2t3BETm2hy4FAzO8Eoxs5eWWrJL963WMYvFstSgE8WXWLW6xg7Az/qoP8Ayt+a71hje1dfPUE+w9snwuDvI3K+g8NmBIIORaCPFagN7FhpnpJiU/WSl31W9lvh7x8/kFNXVOw0WPacbDlxP64odsOXcuT1M/8AKOn0sP8ATIwFu0hRvyUf0kLkOwNbbgvHUrHagINtSpo6hYBDPhPwuI9UtnoJG7rjln6KwRy81ve6ZAZy/GGF79m17a34oaPDxvaF1Kehif77Af1u3qOLDomaRtPJ34rohlSVEJQd2jnkWCsd/wBMeAsmlL0TDvib5H5q/wAEsTdacD+Eg/OyMjxGn4Fv8v4XVU4PmRKXUXETnp6BPPuyDxbb1BQ83QCcc+7NdSZXwHR48QR80QxzSLtcD3G6oowfBJ5Mi5OKVnQOcgljg420NwfzQFDA6O8cjS1zci05EWXdZ4r7gUgx3Bo5wOsZmPdeBZw7nDdyNwhPHtsNjzU9zjmNUhfslovY2Kr1bCW5ELouNYLLT3eO3HqXN1H8Q3d4y7lWMSibKLg7teIIuki2tmXnFT3RUXarUhMqrDnjNrS7+FpJHfYLyHAap2Yp5La5t2f87KmuK5ZHpybpIWFYnn/CdWc+qA/nZ9xXiXr4/wAl/Ruhl/F/xgVUOyUpTWoOSVLqyfYj2MVkw5uzAwcbu8zl6WVbAvkNTkrXUANAaNAAPIWSCsCqHIGQqeochSUAmm1bMIvauLjeg3ranksbHQ/q6JghYV64LVYx4SvFi8QMeOK6v0BxTbpWG/aj7DhyaAAfKxXKCnnQzFzT1DQT+7kIY4brnJrvOw7jyRQGdixCp2nN5Mv/AFH8lLT4kLZpHWVFnnlYeg/FAyVPNedlVzZ6GLaCRZpqoFCvmCRNxDddSCtUtLK2hoasLPpXNJ5H8ChnVDgioi2WRlbzUzK7mqsys71K2r5o6WbUWxmKW3qY4qN6qTKhbmYoUzbFpdii8ZiTDyKq4nK2L990KYdiwVNdyChZW7yEk+l8SpW1LeKDsKosMdYCpmVw4kfJVbrODhdSbZPI/NFNozSZa2WfG857TdTbLMtDRw+LjollNhNPGS5tLFtE3Jc3aF+IYTsg+CBkllMLL9ljXA32iC7buG5DIgBnmVIzENxKrKcqRGGONsaREhro2gNY4naY0ANO17wsBoeGmaW18vVixbl5jyWzpiNNOH4KAy7jm0qd3yWS08AhxYbiLd35LEoqejEpcSxwLSbi7jexXiNrwU0ftHPaiG7T3JOQsWL2/UJJo8ZBOGMvKy+43/pG19yc1T9VixQMLpHKIleLFgmhWtlixYw9xLC3RRwuJvtsueTtbeRb6pZdYsRYEeLxYsQCeLVy8WLGOhUeIS1MIma27h2ZBcDtMAG0L7iLGyW/tTNYsU5wXJaE3VeAiKuBU30tYsUXFFbZI2sRLKwLxYpuKGtnrpmncoXSALFiyRmyeCoG8ooVjBv9FixK0NZqKxm5aPnbxWLFqBZo48FA+ZwXqxZBs8ZXkahSCuJyB1y814sTaUDUx5ieKh0bI/qhxtuOzEOrHqHnxQbJ2OyF7rFi00DG9iaGVwyvdTMriDZzcvPNYsUizYQasfB/cVixYtQ2o//Z'
       },

       Services_Navbar: {
        First_Link: 'How it work',
        Second_Link: 'Beauticians',
        Third_Link: 'Blogs',
        Fourth_Link: 'FAQs',
        Fifth_Link: 'About salon at Home for Men'
  },

  How_it_Work_Column: {
    heading: 'How it Works',
    How_It_Work_First_Element: {
          Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg',
          Text: 'Choose a Salon service',
          Sub_Text: 'Select from various salon packages & services',
      },
      How_It_Work_Second_Element: {
       Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_899773a0.png',
       Text: 'Choose your time-slot',
       Sub_Text: 'We service from 9am-7pm',
   },
       How_It_Work_Third_Element: {
       Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_89c4ec40.png',
       Text: 'Relax and enjoy salon service',
       Sub_Text: 'Our Professionals will get in touch with you an hour before the Services'
   }
  },
  Professionals_Rating_Column: {
      headings : 'Beauticians',
      Professionals_Cards_List : [
          {
              Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56b45626b637639e7eed43de/1521523493831-2ca9d8a1484b64ac8d045eb7818d27c6.jpeg',
              Name: 'Tripti Rana',
              Address: 'CR Park, New Delhi, Delhi, India',
              Commenter_Name_Alphabate: 'S',
              Commenter_Name: 'Shweta',
              Rating: '5.0',
              Comment: 'I want to give her all the compliments, Punctual, hygenic, polite, patient, well groomed, expert service and eye to details ',
              Extra_Comments: {

                   Commenter_Name_Alphabate: 'N',
                   Commenter_Name: 'Nitish',
                   Comment: 'She did a good job overall. My wife was very heppy with service'    
              },
              
          },
          {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58ae9421d451ceb649f43089/1609232457477-293a6e.jpeg',   
           Name: 'Deepika Gupta',
           Address: 'Nihal Vihar, Delhi, India',
           Commenter_Name_Alphabate: 'K',
           Commenter_Name: 'Kanika',
           Rating: '5.0',
           Comment: 'Best beauticians I have ever found perfect in her work super polite and very experienced',
           Extra_Comments:  {

                    Commenter_Name_Alphabate: 'A',
                    Commenter_Name: 'Anita',
                    Comment: 'Deepika Was hygenic, well groomed and she was really particular in giving a eye to each detail'    
               },
            
          },
          {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56e913631a6caa5d3bd63392/1529904572825-48ffbd8125b5cfa09404db7446d74fe6.jpeg',   
           Name: 'Pooja Kumari',
           Address: 'Neb sarai, Block J, Saket, New Delhi, Delhi, India',
           Commenter_Name_Alphabate: 'D',
           Commenter_Name: 'Divyanshi',
           Rating: '5.0',
           Comment: 'Very friendly, understanding and knowledgeable service. Loved it',
           Extra_Comments:  {

                   Commenter_Name_Alphabate: 'P',
                   Commenter_Name: 'Preksha',
                   Comment: 'Pooja did an excellent job.. loved her service'
               }
            
          },
          {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5a82b5c602614b5f007781aa/1536661908268-fae31dcd7c9cdb624c4e6a8d5e775b12.jpeg',   
           Name: 'Soni Srivastava',
           Address: 'Dwarka, Delhi, India',
           Commenter_Name_Alphabate: 'S',
           Commenter_Name: 'Seema',
           Rating: '5.0',
           Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
           Extra_Comments:  {

                   Commenter_Name_Alphabate: 'V',
                   Commenter_Name: 'Vinita',
                   Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                   'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                   'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
           
          }
       },
       {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/584fa25dd3269aee2c5c681b/1517894439202-74cb860b6ca0d57e8b1f36f4083e9089.png',   
           Name: 'Sandhya Sharma',
           Address: '3rd floor, JP House, Plot No. 172 Lane No. 2, Westend MArg ',
           Commenter_Name_Alphabate: 'S',
           Commenter_Name: 'Seema',
           Rating: '5.0',
           Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
           Extra_Comments:  {

                   Commenter_Name_Alphabate: 'V',
                   Commenter_Name: 'Vinita',
                   Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                   'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                   'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
           
          }
       },
       {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/568fb00f4e81d99c35b4bd51/1538118244891-6091599123fddd241b02b11366b95bf8.jpeg',   
           Name: 'Pooja Chauhan',
           Address: 'Budh Vihar Phase I, Budh Vihar, Delhi, India',
           Commenter_Name_Alphabate: 'R',
           Commenter_Name: 'Revanshi',
           Rating: '5.0',
           Comment: 'I want ms.Pooja Chauhan again as my service expert next time too. Great service.' ,
           Extra_Comments:  {

                   Commenter_Name_Alphabate: 'T',
                   Commenter_Name: 'Tuhin',
                   Comment: 'Excellent service and on time and very good at her service and takes case lot',
           
          }
       },
       {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58b5331e455dc84937b40ce0/1530073428870-b75256f2246d56c432c21ed9d14e044d.jpeg',   
           Name: 'Sanju Suryavanshi',
           Address: 'Naraina Village, Naraina, Delhi, India',
           Commenter_Name_Alphabate: 'A',
           Commenter_Name: 'Avni',
           Rating: '5.0',
           Comment: 'She was really superb at her work... PainLess Wax..' ,
           Extra_Comments:  {

                   Commenter_Name_Alphabate: 'T',
                   Commenter_Name: 'Tuhin',
                   Comment: 'Excellent service and on time and very good at her service and takes case lot',
           
          }
       },
       {
       
       Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5b879900519a69220036eb13/1535691152402-f6eb392710af7e289b36d08a44a84b6a.jpeg',   
           Name: 'Alka kapoor',
           Address: 'Sant Nagar, Burari, Delhi, India',
           Commenter_Name_Alphabate: 'H',
           Commenter_Name: 'Harpreet',
           Rating: '5.0',
           Comment: 'Good work and patient technician m. But Alka kapoor didn,t provide wax enough for a plus size person, also the aporn for waxing was very small. ' ,
           Extra_Comments:  {

                   Commenter_Name_Alphabate: 'S',
                   Commenter_Name: 'Sudha',
                   Comment: 'Excellent service and on time and very good at her service and takes case lot',
           
          }
       }
      ]

  },







//creating also lookes and  images carasou
Also_Looked_At_Services : {
   heading: 'People also lookes At',
   link_items_list: [
       {
           image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bc824070.jpeg',
           text_lable: 'Massage Therapists At Home For Women',
           link:'',
       },
       {
           image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_3c671dc0.jpeg',
           text_lable: 'Microwave Repair Professionals',
           link: ''
       },
       {
           image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a91b73d0.jpeg',
           text_lable: 'Electricians',
           link: ''
       },
       {
           image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg',
           text_lable: 'Home Cleaning Service Professionals',
           link: ''
       },
       {
           image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_f5a01e90.jpeg',
           text_lable: 'Disinfection Service',
           link: ''
       },
       {
           image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_8d9f2900.png',
           text_lable: 'Beauty Service Professionals',
           link: ''
       }
   ]
},














  //creating services text names for services near me

  Related_Services_Column: {
    heading: 'Popular Services Near You',
    links:   [
      {link: 'Electricians'},
      {link: 'Microwave Repair'},
      {link: 'Cleaning Services'},
      {link: 'Salons'},
      {link:'Spa'}
   ],

  },


  
  Related_Services_Blogs_heading : {
      heading:'Popular Blog posts on Beauty'
  },

  Related_Services_Blogs_Carasoul : [
      {
       image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/14180910/multani-mitti-face-mask-.jpg',
       textlable: 'Multani Mitti Packs: Everything About the Magic Mud',
       link: 'https://blog.urbancompany.com/beauty/multani-mitti-face-packs/'
       },

       {
       image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/30163947/rose-water-for-dry-skin.jpg',
       textlable: 'Miracles Happen When You Use Rose Water for Dry Skin!',
       link: 'https://blog.urbancompany.com/beauty/rose-water-for-dry-skin/'},

       {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/21190929/Rose-Water-for-Hair.jpg',
            textlable: '5 Reasons Why You Should Use Rose Water for Hair',
            link:'https://blog.urbancompany.com/beauty/rose-water-for-hair/'
       },

       {
           image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/18153055/Threading-Do-and-Dont.jpg',
           textlable: 'What to Do (and Not Do) After a Salon Visit',
           link:'https://blog.urbancompany.com/beauty/dos-donts-salon-visit/'
       },

       {
           image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/11145102/rose-water-for-skin-feature-image.jpg',
           textlable: 'Best Ways to Use Rose Water for Skin',
           link: 'https://blog.urbancompany.com/beauty/rose-water-for-skin/'
       },

       {
           image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/12/25174046/apple-cider-hero1.png',
           textlable: 'Apple Cider Vinegar for Hair: Why Use It and How (Part 2)',
           link: 'https://blog.urbancompany.com/beauty/apple-cider-vinegar-for-hair/'
       },

       {
           image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/06134012/lavender-1.png',
           textlable: 'How to Use Lavender Oil for Hair Growth & More',
           link: 'https://blog.urbancompany.com/beauty/lavender-oil-for-hair-growth/'
       },

       {
           image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25182257/new.jpg',
           textlable: 'Cocoa Butter Uses for Skin and Hair (DIY Recipes Included!)',
           link: 'https://blog.urbancompany.com/beauty/cocoa-butter-uses/'
       }
  ],








//creating object for latest customer reviews
   Latest_Customer_Reviews_Average_Column: {
       heading: 'Latest customer reviews',
       sub_heading: 'of Painter Service Professionals in New Delhi',
       rating: '4.8',
       number_of_reviews: 'based on 789,789 reviews',
       view_more_comment: 'https://www.urbancompany.com/customer_reviews/delhi-ncr-salon-at-home'
   }
,










  

 //creating questions list for service page 

 Question_And_Answer: [
     
   {
      question: 'Why do I need a spa for men at home?',
       
   },


   {
      question: 'Are the massage services only for men?',
           
   },
      
   {
      question: 'Is the massage for men service an in house treatment?',
           
   },

   {
       question: 'What are the different types of therapies for men available?'

   },

   {
       question: 'How much will a massage at home for men cost me?',
   },
    
   {
       question: 'Are there any additional services available under this category?',
   },

   {
       question: 'I want to relieve stress. What massages do you recommend?',
   },

   {
       question: "Is the therapist male or female?",
      
   },

   {
       question: 'Do I need to take of anything before a massage session?',
   }, 

   {
       question: 'Do I need to take a bath after an oil massage?',
   },

   {
       question: 'Can I keep the TV on during a massage?',
   },

   {
       question: 'Can I use my cell phone during a massage therapy?',
   },

   {
       question: 'Why should I go with Urban Company for massage?',
   },

   {
       question: 'What is the minimum booking amount to avail this service?',
   },

   {
      question: 'Is massage for men a part of UC wellness subscription?',
   },
   {
       question: 'What do I need to wear before a massage?',
   }
]
,






   
   




   //creating state object for most asked questions and answer

  Modal_Question_And_Answer: {
     
      First_Element_Of_Question_Modal : {
          question: 'Why do I need a spa for men at home?',
            answer: 'Urban Company offers a lot of options that specifically cater to your needs. Here are some spa treatments that we offer' +
            'Aromatherapy Massage- The pressure intensity is low and it specifically helps in relaxing the body and calming the mind' +
            'Swedish Massage- The pressure intensity is medium and it helps in muscle relaxation and stress relaxation' + 
            'Thai Massage- - The pressure intensity is high and it helps boosting your energy, improves flexibility and relaxation of muscles' +
            'Deep Tissue Massage- The pressure intensity is high. It is great of pain relieving and easing chronic muscle tensions' + 
            'Body Scrub Massage- The pressure intensity is low and it helps in getting a youthful, vibrant and hydrated skin.'
       },


      Second_Element_Of_Question_Modal: {
                 question: 'Are the massage services only for men?',
                 answer: 'Apart from the spa treatments, Urban Company offers you a host of add ons that you can book. Whether it is a part of a package you choose (and save money) or alacarte:' +
                 'Face massage- A 20 minute face massage with low to medium intensity will leave your face glowing with improved blood circulation' +
                 'Head &amp; shoulder massage- A 20 minute massage with medium intensity will relieve you of headaches and any upper body tension' +
                 'Foot reflexology- A 20 minute massage with low intensity relieves stress and treats imbalances of organs connected to the feet' +
                 'Hand reflexology- A 20 minute massage with high intensity relieves stress and treats imbalances of organs connected to the hands'
       },
          
       Third_Element_Of_Question_Modal: {
                question: 'Is the massage for men service an in house treatment?',
                answer: 'The regularity of your spa treatments depends on many factors such as physical, emotional stress along with your budget.' + 
                'You will feel the benefits after getting the treatment regularly. A spa once in a year or once in a while doesn’t really help.' +
                ' Get a monthly massage to stay stress free and reap the many benefits that a spa offers.' +
                'With the Urban Company wellness membership, you can get attractive discounts on your spa treatments!'
       },

       Fourth_Element_Of_Question_Modal: {
           question: 'What are the different types of therapies for men available?',
           answer: 'We only have trained and experienced female therapists.' +
            'Also as of now, we only offer spa treatments for women.'

       },

       Fifth_Element_Of_Question_Modal: {
                question: 'How much will a massage at home for men cost me?',
                answer: 'Yes. We recommend you inform the service professional about the same before you confirm the appointment. However, there no difference in charges and you will be charged as per our price points.'
       },
        
       Sixth_Element_Of_Question_Modal :{
           question: 'Are there any additional services available under this category?',
           answer: 'Yes. If you communicate with a therapist, the expert will be able to advice you better on the treatment and the pressure you should pick for the spa treatment.'
       },

       Seventh_Element_Of_Question_Modal: {
           question: 'I want to relieve stress. What massages do you recommend?',
           answer: 'A spa treatment is designed to relax you. Here are some things you can do that can help you get the maximum out of a treatment at home:' +
           'Go low on caffeine' +
           'Try not to have a heavy meal before a spa treatment' +
           'Stretch a bit and get comfortable' +
           'Communicate with your therapist and let them know if the pressure is right'
       },

       Eighth_Element_Of_Question_Modal: {
           question: "Is the therapist male or female?",
           answer: 'You certainly can, but we advise you do not. Getting a spa is' +
           ' to relax your senses and a cellphone will always keep you preoccupied.' + 
           'It is good to keep it aside while you are getting a therapeutic session done.'
       },

       Nineth_Element_Of_Question_Modal: {
           question: 'Do I need to take of anything before a massage session?',
           answer: 'You do not have to worry about what to wear during a session. Our experts get every possible equipment needed for a relaxing spa, including what you can wear. The wearable gown is exclusively made available for clients and is not reused.'
       }, 

       Tenth_Element_Of_Question_Modal :{
           question: 'Do I need to take a bath after an oil massage?',
           answer: 'If you are in your first trimester, it is advisable to not get a spa. Towards the later part of your pregnancy a spa can actually help. We advise consulting the therapist on what treatment would best work for you.'
       },

       Eleventh_Element_Of_Question_Modal :{
           question: 'Can I keep the TV on during a massage?' ,
           answer: 'Your hair follicles open up after you get waxing done. It is best to' +
            'avoid contact with excess moisture right after getting waxing done. Also if you have a sensitive skin, it may cause redness (and swelling) post waxing. Wait at east 24 hours to get a massage done.'
       },

       Twelth_Element_Of_Question_Modal: {
           question: 'Can I use my cell phone during a massage therapy?',
           answer: 'With Urban Company’s “Gift a Spa” service, you can book a spa for a friend or a loved one and gift them a day of pampering. Just log on to the app to find the service.'
       },

       Thirteenth_Element_Of_Question_Modal: {
           question: 'Why should I go with Urban Company for massage?',
           answer: 'The minimum booking amount for a spa at home service is Rs.999.'
       },

        Fourteenth_Element_Of_Question_Modal: {
           question: 'What is the minimum booking amount to avail this service?',
           answer: 'You can sit back and relax, for the therapist will clean up after every spa appointment and leave your home exactly the way it was.'
       },

       Fifteenth_Element_Of_Question_Modal: {
          question: 'Is massage for men a part of UC wellness subscription?',
          answer: 'Give you the time of your life.'
       },
       Sixteenth_Element_Of_Question_Modal:  {
           question: 'What do I need to wear before a massage?',
           answer: 'Our salon professionals use the best equipment which is sterile before use. They also ensure minimal dirt and clean up after they have worked their magic. Your home is definitely a safer and a cleaner place than any salon near your home (or anywhere for that matter).'
       }
  },

}



   

}






















































//Painters



//creating state for Massage for Men service page
 export const Painters = {
    Main_Photo: 'https://images.theconversation.com/files/280402/original/file-20190620-149835-1y7zil6.jpg?ixlib=rb-1.1.0&rect=0%2C93%2C1769%2C883&q=45&auto=format&w=1356&h=668&fit=crop', 
    Main_Heading: 'Best House Painter in New Delhi',
    Sub_Heading_List : {
        First_Element : 'On-Time & Mess-Free Experience',
        Second_Element : 'Top Quality Paints & Transparent Costs',
        Third_Element : '1 ear Service Guarantee' 
    },
   Packages_Box: {
       Heading: 'View All Beauty Services',
       Fields: {
           First_Field: 'Asian Paints',
           Second_Field: 'Dulux/Berger',
           Third_Field: 'Painting Price / Quality',
           Fourth_Field: 'Colour Shade Guide / Other',
       },
       Images : {
         First_Image: 'https://5.imimg.com/data5/JC/FC/MY-34811629/asian-paints-premium-satin-enamel-500x500.jpg',
         Second_Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JjwDNIvriHeN1TFZMAEpTKKwAGCoOXiAYw&usqp=CAU',
         Third_Image: 'https://dubaipaintservice.files.wordpress.com/2018/08/house-painting.jpg',
         Fourth_Image: 'https://images-na.ssl-images-amazon.com/images/I/71n5MfC4%2BJL._AC_SX425_.jpg'
       },

   },
   Services_Navbar: {
         First_Link: 'How it work',
         Second_Link: 'Painters',
         Third_Link: 'Blogs',
         Fourth_Link: 'FAQs',
         Fifth_Link: 'About Painter '
   },

   How_it_Work_Column: {
     heading: 'How it Works',
     How_It_Work_First_Element: {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg',
           Text: 'Choose a Salon service',
           Sub_Text: 'Select from various salon packages & services',
       },
       How_It_Work_Second_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_899773a0.png',
        Text: 'Choose your time-slot',
        Sub_Text: 'We service from 9am-7pm',
    },
        How_It_Work_Third_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_89c4ec40.png',
        Text: 'Relax and enjoy salon service',
        Sub_Text: 'Our Professionals will get in touch with you an hour before the Services'
    }
   },
   Professionals_Rating_Column: {
       headings : 'Beauticians',
       Professionals_Cards_List : [
           {
               Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/59aea6aef435855d00231904/1504852121389-878c03d18926e28dab792f7b0f35eee3.jpeg',
               Name: 'Tripti Rana',
               Address: 'CR Park, New Delhi, Delhi, India',
               Commenter_Name_Alphabate: 'S',
               Commenter_Name: 'Shweta',
               Rating: '5.0',
               Comment: 'I want to give her all the compliments, Punctual, hygenic, polite, patient, well groomed, expert service and eye to details ',
               Extra_Comments: {

                    Commenter_Name_Alphabate: 'N',
                    Commenter_Name: 'Nitish',
                    Comment: 'She did a good job overall. My wife was very heppy with service'    
               },
               
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58f6fc35c1baa80114ee69cb/1492676994320-5f0f54d102b4fa5ad4862bf72958a732.jpeg',   
            Name: 'Deepika Gupta',
            Address: 'Nihal Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'K',
            Commenter_Name: 'Kanika',
            Rating: '5.0',
            Comment: 'Best beauticians I have ever found perfect in her work super polite and very experienced',
            Extra_Comments:  {

                     Commenter_Name_Alphabate: 'A',
                     Commenter_Name: 'Anita',
                     Comment: 'Deepika Was hygenic, well groomed and she was really particular in giving a eye to each detail'    
                },
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5aab6da860fe0e5f00790341/1521201117549-32e33b267430edf24b770097209a661a.png',   
            Name: 'Pooja Kumari',
            Address: 'Neb sarai, Block J, Saket, New Delhi, Delhi, India',
            Commenter_Name_Alphabate: 'D',
            Commenter_Name: 'Divyanshi',
            Rating: '5.0',
            Comment: 'Very friendly, understanding and knowledgeable service. Loved it',
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'P',
                    Commenter_Name: 'Preksha',
                    Comment: 'Pooja did an excellent job.. loved her service'
                }
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5746c948e24e8a9079d75a87/1464422974637-bb6e4c93b2da9cacaeb22648c5ff6e7c.jpeg',   
            Name: 'Soni Srivastava',
            Address: 'Dwarka, Delhi, India',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5739bac1043aec0310980fb3/1533797616409-3e7de6e5531117307350e591b3b074c1.jpeg',   
            Name: 'Sandhya Sharma',
            Address: '3rd floor, JP House, Plot No. 172 Lane No. 2, Westend MArg ',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/595f8046d9717e5d00104dcc/1499925069985-18ce4e40fab9fca5f78a8d583b37f7b5.jpeg',   
            Name: 'Pooja Chauhan',
            Address: 'Budh Vihar Phase I, Budh Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'R',
            Commenter_Name: 'Revanshi',
            Rating: '5.0',
            Comment: 'I want ms.Pooja Chauhan again as my service expert next time too. Great service.' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/590413e0d8ac675a148c37dc/1521811884732-9ea57e1bdbaa98881f6b217e397dfe88.jpeg',   
            Name: 'Sanju Suryavanshi',
            Address: 'Naraina Village, Naraina, Delhi, India',
            Commenter_Name_Alphabate: 'A',
            Commenter_Name: 'Avni',
            Rating: '5.0',
            Comment: 'She was really superb at her work... PainLess Wax..' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
        
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5b4c338b9dc21f220082b063/1533711629518-35d2c6b35231e91f5131f0bd2b69748a.jpeg',   
            Name: 'Alka kapoor',
            Address: 'Sant Nagar, Burari, Delhi, India',
            Commenter_Name_Alphabate: 'H',
            Commenter_Name: 'Harpreet',
            Rating: '5.0',
            Comment: 'Good work and patient technician m. But Alka kapoor didn,t provide wax enough for a plus size person, also the aporn for waxing was very small. ' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'S',
                    Commenter_Name: 'Sudha',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        }
       ]

   },







//creating also lookes and  images carasou
Also_Looked_At_Services : {
    heading: 'People also lookes At',
    link_items_list: [
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bc824070.jpeg',
            text_lable: 'Massage Therapists At Home For Women',
            link:'',
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_3c671dc0.jpeg',
            text_lable: 'Microwave Repair Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a91b73d0.jpeg',
            text_lable: 'Electricians',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg',
            text_lable: 'Home Cleaning Service Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_f5a01e90.jpeg',
            text_lable: 'Disinfection Service',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_8d9f2900.png',
            text_lable: 'Beauty Service Professionals',
            link: ''
        }
    ]
},
 













   //creating services text names for services near me

   Related_Services_Column: {
     heading: 'Popular Services Near You',
     links:   [
       {link: 'Electricians'},
       {link: 'Microwave Repair'},
       {link: 'Cleaning Services'},
       {link: 'Salons'},
       {link:'Spa'}
    ],

   },


   
   Related_Services_Blogs_heading : {
       heading:'Popular Blog posts on Beauty'
   },

   Related_Services_Blogs_Carasoul : [
       {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/14180910/multani-mitti-face-mask-.jpg',
        textlable: 'Multani Mitti Packs: Everything About the Magic Mud',
        link: 'https://blog.urbancompany.com/beauty/multani-mitti-face-packs/'
        },

        {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/30163947/rose-water-for-dry-skin.jpg',
        textlable: 'Miracles Happen When You Use Rose Water for Dry Skin!',
        link: 'https://blog.urbancompany.com/beauty/rose-water-for-dry-skin/'},

        {
             image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/21190929/Rose-Water-for-Hair.jpg',
             textlable: '5 Reasons Why You Should Use Rose Water for Hair',
             link:'https://blog.urbancompany.com/beauty/rose-water-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/18153055/Threading-Do-and-Dont.jpg',
            textlable: 'What to Do (and Not Do) After a Salon Visit',
            link:'https://blog.urbancompany.com/beauty/dos-donts-salon-visit/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/11145102/rose-water-for-skin-feature-image.jpg',
            textlable: 'Best Ways to Use Rose Water for Skin',
            link: 'https://blog.urbancompany.com/beauty/rose-water-for-skin/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/12/25174046/apple-cider-hero1.png',
            textlable: 'Apple Cider Vinegar for Hair: Why Use It and How (Part 2)',
            link: 'https://blog.urbancompany.com/beauty/apple-cider-vinegar-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/06134012/lavender-1.png',
            textlable: 'How to Use Lavender Oil for Hair Growth & More',
            link: 'https://blog.urbancompany.com/beauty/lavender-oil-for-hair-growth/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25182257/new.jpg',
            textlable: 'Cocoa Butter Uses for Skin and Hair (DIY Recipes Included!)',
            link: 'https://blog.urbancompany.com/beauty/cocoa-butter-uses/'
        }
   ],








//creating object for latest customer reviews
    Latest_Customer_Reviews_Average_Column: {
        heading: 'Latest customer reviews',
        sub_heading: 'of Beauty Service Professionals in New Delhi',
        rating: '4.8',
        number_of_reviews: 'based on 789,789 reviews',
        view_more_comment: 'https://www.urbancompany.com/customer_reviews/delhi-ncr-salon-at-home'
    }
,










   

  //creating questions list for service page 

  Question_And_Answer: [
      
    {
       question: 'How long does the hair to be for waxing ?',
        
    },


    {
       question: 'What should I do to prepare for waxing?',
            
    },
       
    {
       question: 'Does waxing hurt a lot?',
            
    },

    {
        question: 'What are the types of waxing services available with you?'

    },

    {
        question: 'If I have my own wax and brand, can you use that?',
    },
     
    {
        question: 'How long will it take for the hair to grow back?',
    },

    {
        question: 'How often should I get waxed ?',
    },

    {
        question: 'I used a razor once. Will it hurt to get waxed now ?',
       
    },

    {
        question: 'Does waxing also help in removal of tan ?',
    }, 

    {
        question: 'I have never been waxed. Is there something I need to be careful about ?',
    },

    {
        question: 'I am on medication. Will it affect my waxing?',
    },

    {
        question: 'Can I get waxed if I am pregnant?',
    },

    {
        question: 'What is meant by double dipping?',
    },

    {
        question: 'Is eyebrow/upper lip waxing better than threading?',
    },

    {
       question: 'Is face wax safe?',
    },
    {
        question: 'Will it be hygienic to get waxed at home instead of salon that provides waxing near me?',
    }
]
,






    
    




    //creating state object for most asked questions and answer

   Modal_Question_And_Answer: {
      
       First_Element_Of_Question_Modal : {
           question: 'How long does the hair to be for waxing ?',
             answer: 'The longer the hair, the better the wax will grab the hair and will pull it out.' + 
             'Ideally one can wait for 3-5 weeks before getting waxing done depending on the hair growth.' +
             ' In case of emergency in the face of an event you need to go to, we suggest you wait for at least 7 days before another round of body waxing.' + 
             'A word of advice- never clip your hair before your waxing day.'
        },


       Second_Element_Of_Question_Modal: {
                  question: 'What should I do to prepare for waxing?',
                  answer: 'Although our salon at home professionals will do everything possible to make this process as pain free and satisfying as possible, there are certain things that you can do to ensure a great waxing session:' +
                  'Ensure the room you get the service done is air conditioned (unless it is winter)' +
                  'Exfoliate the skin lightly' +
                  'Moisturise till the day before your waxing appointment' + 
                  'Let the hair grow. Longer the hair, the better' +
                  'Check yourself for burns, cuts etc. We recommend you treat it before getting waxing done or inform the professional' +
                 ' Let the professional know if you are allergic to anything particular to the service'
        },
           
        Third_Element_Of_Question_Modal: {
                 question: 'Does waxing hurt a lot?',
                 answer: 'The process involves ripping out the hair from the follicle and it is a painful process.' +
                 ' However, the pain threshold for waxing varies from person to person. Those who have thick hair, sensitive skin and/or getting waxed for the first time particularly undergo more pain. ' +
                 'That is why it is highly recommended to go to not just pros but skilled salon beauty professionals. Our professionals undergo a rigorous training process before being a part of Urban Company, despite having years of experience in the field.' +
                 ' This ensures that you get the desired result with minimal inconvenience.'
        },

        Fourth_Element_Of_Question_Modal: {
            question: 'What are the types of waxing services available with you?',
            answer: 'We offer:' + 
            'Rica wax for sensitive skin' +
            'Rica peel off wax ' +
            'Regular wax'

        },

        Fifth_Element_Of_Question_Modal: {
                 question: 'If I have my own wax and brand, can you use that?',
                 answer: 'Yes. We recommend you inform the service professional about the same before you confirm the appointment. However, there no difference in charges and you will be charged as per our price points.'
        },
         
        Sixth_Element_Of_Question_Modal :{
            question: 'How long will it take for the hair to grow back?',
            answer: 'Everyone does not have the same growth pattern or the rate at which hair regrows. Some are lucky to even not have a re-growth for months.' +
            ' Even your ethnicity affects your hair growth.' +
            ' However, on an average 4 weeks is the time it takes for your hair to come back.'
        },

        Seventh_Element_Of_Question_Modal: {
            question: 'How often should I get waxed ?',
            answer: 'If you are getting waxed for the first time, start with getting it done every 2-3 weeks for at least 3-4 times.' +
            'This also helps in prevention of ingrown hairs to grow. After that it completely depends on how noticeable the hair, how much it bothers you and what is your salon budget.' +
            'On an average waxing is done every 4-6 weeks.'
        },

        Eighth_Element_Of_Question_Modal: {
            question: 'I used a razor once. Will it hurt to get waxed now ?',
            answer: 'Always avoid a razor as it not only results in cuts and scrapes but also makes hair harder and darker the next time it comes.' +
            ' Waxing becomes a painful process when hair is harder (and smaller).' +
            'Since waxing pulls the hair from the follicles, the hair that comes back is always softer and weaker. Hence, easier to pull.'
        },

        Nineth_Element_Of_Question_Modal: {
            question: 'Does waxing also help in removal of tan ?',
            answer: 'Waxing sticks to your skin and removes the top most layer of it.' +
            'Hence, it not only exfoliates the skin but also removes significant tanning.'
        }, 

        Tenth_Element_Of_Question_Modal :{
            question: 'I have never been waxed. Is there something I need to be careful about ?',
            answer: 'Here are some tips that can make the process easier on you:' +
            'Follow the steps for reducing the pain (given above)' +
            'Experiment with the kind of waxing to know what suits you the best' +
            'Do not trim your hair before you get waxed' +
            'Do not shave in between waxing sessions. The hair will be shorter and difficult to take out and you will also have more ingrown hair.'
        },

        Eleventh_Element_Of_Question_Modal :{
            question: 'I am on medication. Will it affect my waxing?',
            answer: 'Yes it does. Certain medicines make the skin sensitive by thinning them out. This makes it more likely for your skin to burn or peel during a session.' +
            ' Please let the salon professional know the medicine that you are on so they can recommend you the type of service you should go for.'
        },

        Twelth_Element_Of_Question_Modal: {
            question: 'Can I get waxed if I am pregnant?',
            answer: 'Yes you can. However, during pregnancy your skin is extra sensitive and needs to be treated with hard wax.' +
            'Ensure that the professional knows about your pregnancy and always go for the trained salon specialists from Urban Company.'
        },

        Thirteenth_Element_Of_Question_Modal: {
            question: 'What is meant by double dipping?',
            answer: 'Double dipping is the term used when a professional dips the same stick used in waxing back in the wax after applying it on you or anyone else.' +
             'Our professionals use fresh sticks to avoid bacterial infections and use sterile methods to apply wax so you don’t have to worry about contracting an infection.'
        },

         Fourteenth_Element_Of_Question_Modal: {
            question: 'Is eyebrow/upper lip waxing better than threading?',
            answer: 'Waxing may always not work for removing the unwanted hair off your body. In this case, threading your eyebrows and upper lip is better than waxing because:' +
            'It gives a better shape to your eyebrows' +
            'No chemicals involved' +
            'Works better for sensitive skin' +
            'Lasts longer ' +
            'Quick and less painful' 
        },

        Fifteenth_Element_Of_Question_Modal: {
           question: 'Is face wax safe?',
           answer: 'Facial skin is sensitive and needs extra care than the rest of the body. It is perfectly safe to get your face waxed but you need to get it done by a verified and a skilled salon professional, like the ones available on Urban Company.'
        },
        Sixteenth_Element_Of_Question_Modal:  {
            question: 'Will it be hygienic to get waxed at home instead of salon that provides waxing near me?',
            answer: 'Our salon professionals use the best equipment which is sterile before use. They also ensure minimal dirt and clean up after they have worked their magic. Your home is definitely a safer and a cleaner place than any salon near your home (or anywhere for that matter).'
        }
   }



}




















 




























































































//creating state for cleaning & Disinfection service page
 export const CleaningAndDisinfection = {
     Main_Photo: 'https://www.ecomaids.com/wp-content/uploads/2021/01/header_bg-32.jpg',
    Main_Heading: 'Cleaning and DisInfection Services',
    Sub_Heading_List : {
        First_Element : 'Stay Clean, Stay Healthy',
        Second_Element : 'Make Your home infection free and beautiful',
        Third_Element : 'Get your home cleaned by professionals' 
    },
   Packages_Box: {
       Heading: 'View All Men Services',
       Fields: {
           First_Field: 'Exclusive Packages',
           Second_Field: 'Bathroom cleaning',
           Third_Field: 'Home Cleaning and DisInfection',
           Fourth_Field: 'Other cleaning Services',
       },
       Images : {
         First_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/categories/category_v2/category_e1f8fd10.png',
         Second_Image: "https://as1.ftcdn.net/jpg/02/36/57/48/500_F_236574858_xRrOATKI5HNthPQhNvaaBwiqmjyc3o9q.jpg",
         Third_Image: "https://as1.ftcdn.net/jpg/02/36/57/48/500_F_236574858_xRrOATKI5HNthPQhNvaaBwiqmjyc3o9q.jpg",
         Fourth_Image: "https://cdn.shopify.com/s/files/1/0046/2730/0455/products/5cb89df440148a6049000200_700x700.jpg?v=1577568675"
       },

   },
   Services_Navbar: {
         First_Link: 'How it work',
         Second_Link: 'Cleaners',
         Third_Link: 'Blogs',
         Fourth_Link: 'FAQs',
         Fifth_Link: 'About Cleaning'
   },

   How_it_Work_Column: {
     heading: 'How it Works',
     How_It_Work_First_Element: {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg',
           Text: 'Choose a  service',
           Sub_Text: 'Select from various salon packages & services',
       },
       How_It_Work_Second_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_899773a0.png',
        Text: 'Choose your time-slot',
        Sub_Text: 'We service from 9am-7pm',
    },
        How_It_Work_Third_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_89c4ec40.png',
        Text: 'Relax and enjoy  service',
        Sub_Text: 'Our Professionals will get in touch with you an hour before the Services'
    }
   },
   Professionals_Rating_Column: {
       headings : 'Cleaners',
       Professionals_Cards_List : [
           {
               Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56b45626b637639e7eed43de/1521523493831-2ca9d8a1484b64ac8d045eb7818d27c6.jpeg',
               Name: 'Tripti Rana',
               Address: 'CR Park, New Delhi, Delhi, India',
               Commenter_Name_Alphabate: 'S',
               Commenter_Name: 'Shweta',
               Rating: '5.0',
               Comment: 'I want to give her all the compliments, Punctual, hygenic, polite, patient, well groomed, expert service and eye to details ',
               Extra_Comments: {

                    Commenter_Name_Alphabate: 'N',
                    Commenter_Name: 'Nitish',
                    Comment: 'She did a good job overall. My wife was very heppy with service'    
               },
               
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58ae9421d451ceb649f43089/1609232457477-293a6e.jpeg',   
            Name: 'Deepika Gupta',
            Address: 'Nihal Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'K',
            Commenter_Name: 'Kanika',
            Rating: '5.0',
            Comment: 'Best beauticians I have ever found perfect in her work super polite and very experienced',
            Extra_Comments:  {

                     Commenter_Name_Alphabate: 'A',
                     Commenter_Name: 'Anita',
                     Comment: 'Deepika Was hygenic, well groomed and she was really particular in giving a eye to each detail'    
                },
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56e913631a6caa5d3bd63392/1529904572825-48ffbd8125b5cfa09404db7446d74fe6.jpeg',   
            Name: 'Pooja Kumari',
            Address: 'Neb sarai, Block J, Saket, New Delhi, Delhi, India',
            Commenter_Name_Alphabate: 'D',
            Commenter_Name: 'Divyanshi',
            Rating: '5.0',
            Comment: 'Very friendly, understanding and knowledgeable service. Loved it',
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'P',
                    Commenter_Name: 'Preksha',
                    Comment: 'Pooja did an excellent job.. loved her service'
                }
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5a82b5c602614b5f007781aa/1536661908268-fae31dcd7c9cdb624c4e6a8d5e775b12.jpeg',   
            Name: 'Soni Srivastava',
            Address: 'Dwarka, Delhi, India',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/584fa25dd3269aee2c5c681b/1517894439202-74cb860b6ca0d57e8b1f36f4083e9089.png',   
            Name: 'Sandhya Sharma',
            Address: '3rd floor, JP House, Plot No. 172 Lane No. 2, Westend MArg ',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/568fb00f4e81d99c35b4bd51/1538118244891-6091599123fddd241b02b11366b95bf8.jpeg',   
            Name: 'Pooja Chauhan',
            Address: 'Budh Vihar Phase I, Budh Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'R',
            Commenter_Name: 'Revanshi',
            Rating: '5.0',
            Comment: 'I want ms.Pooja Chauhan again as my service expert next time too. Great service.' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58b5331e455dc84937b40ce0/1530073428870-b75256f2246d56c432c21ed9d14e044d.jpeg',   
            Name: 'Sanju Suryavanshi',
            Address: 'Naraina Village, Naraina, Delhi, India',
            Commenter_Name_Alphabate: 'A',
            Commenter_Name: 'Avni',
            Rating: '5.0',
            Comment: 'She was really superb at her work... PainLess Wax..' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
        
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5b879900519a69220036eb13/1535691152402-f6eb392710af7e289b36d08a44a84b6a.jpeg',   
            Name: 'Alka kapoor',
            Address: 'Sant Nagar, Burari, Delhi, India',
            Commenter_Name_Alphabate: 'H',
            Commenter_Name: 'Harpreet',
            Rating: '5.0',
            Comment: 'Good work and patient technician m. But Alka kapoor didn,t provide wax enough for a plus size person, also the aporn for waxing was very small. ' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'S',
                    Commenter_Name: 'Sudha',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        }
       ]

   },







//creating also lookes and  images carasou
Also_Looked_At_Services : {
    heading: 'People also lookes At',
    link_items_list: [
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bc824070.jpeg',
            text_lable: 'Massage Therapists At Home For Women',
            link:'',
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_3c671dc0.jpeg',
            text_lable: 'Microwave Repair Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a91b73d0.jpeg',
            text_lable: 'Electricians',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg',
            text_lable: 'Home Cleaning Service Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_f5a01e90.jpeg',
            text_lable: 'Disinfection Service',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_8d9f2900.png',
            text_lable: 'Beauty Service Professionals',
            link: ''
        }
    ]
},
 













   //creating services text names for services near me

   Related_Services_Column: {
     heading: 'Popular Services Near You',
     links:   [
       {link: 'Electricians'},
       {link: 'Microwave Repair'},
       {link: 'Cleaning Services'},
       {link: 'Salons'},
       {link:'Spa'}
    ],

   },


   
   Related_Services_Blogs_heading : {
       heading:'Popular Blog posts on Beauty'
   },

   Related_Services_Blogs_Carasoul : [
       {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/14180910/multani-mitti-face-mask-.jpg',
        textlable: 'Multani Mitti Packs: Everything About the Magic Mud',
        link: 'https://blog.urbancompany.com/beauty/multani-mitti-face-packs/'
        },

        {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/30163947/rose-water-for-dry-skin.jpg',
        textlable: 'Miracles Happen When You Use Rose Water for Dry Skin!',
        link: 'https://blog.urbancompany.com/beauty/rose-water-for-dry-skin/'},

        {
             image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/21190929/Rose-Water-for-Hair.jpg',
             textlable: '5 Reasons Why You Should Use Rose Water for Hair',
             link:'https://blog.urbancompany.com/beauty/rose-water-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/18153055/Threading-Do-and-Dont.jpg',
            textlable: 'What to Do (and Not Do) After a Salon Visit',
            link:'https://blog.urbancompany.com/beauty/dos-donts-salon-visit/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/11145102/rose-water-for-skin-feature-image.jpg',
            textlable: 'Best Ways to Use Rose Water for Skin',
            link: 'https://blog.urbancompany.com/beauty/rose-water-for-skin/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/12/25174046/apple-cider-hero1.png',
            textlable: 'Apple Cider Vinegar for Hair: Why Use It and How (Part 2)',
            link: 'https://blog.urbancompany.com/beauty/apple-cider-vinegar-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/06134012/lavender-1.png',
            textlable: 'How to Use Lavender Oil for Hair Growth & More',
            link: 'https://blog.urbancompany.com/beauty/lavender-oil-for-hair-growth/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25182257/new.jpg',
            textlable: 'Cocoa Butter Uses for Skin and Hair (DIY Recipes Included!)',
            link: 'https://blog.urbancompany.com/beauty/cocoa-butter-uses/'
        }
   ],








//creating object for latest customer reviews
    Latest_Customer_Reviews_Average_Column: {
        heading: 'Latest customer reviews',
        sub_heading: 'of Beauty Service Professionals in New Delhi',
        rating: '4.8',
        number_of_reviews: 'based on 789,789 reviews',
        view_more_comment: 'https://www.urbancompany.com/customer_reviews/delhi-ncr-salon-at-home'
    }
,










   

  //creating questions list for service page 

  Question_And_Answer: [
      
    {
       question: 'What are the different spa treatemnt for women you have ?',
        
    },


    {
       question: 'What are the add ons I can opt for if i book a spa for women at home?',
            
    },
       
    {
       question: 'How regularly should I get a spa for women treatment done?',
            
    },

    {
        question: 'Will there be a female or a male therapist?'

    },

    {
        question: 'Should I tell anyone about the allergies or medical conditions I have?',
    },
     
    {
        question: 'What should I do before a spa treatment?',
    },

    {
        question: 'Do I need to take  a bath after the spa at home treatment ?',
    },

    {
        question: "Can I use my cell phone during a spa at home treatment?",
       
    },

    {
        question: 'What should I wear for the spa for women?',
    }, 

    {
        question: 'Should I avoid spa for women at home If I am pregnant ?',
    },

    {
        question: 'I just got waxing done. Can I book a spa at home the same day ?',
    },

    {
        question: 'Can I gift a spa to a friend?',
    },

    {
        question: 'What is the minimum amount I can book for a spa for women at home service?',
    },

    {
        question: 'Will the therapist clean my house after a spa at home treatment?',
    },

    {
       question: 'What they actually do in spa service?',
    },
    {
        question: 'How to rate spa treatment?',
    }
]
,






    
    




    //creating state object for most asked questions and answer

   Modal_Question_And_Answer: {
      
       First_Element_Of_Question_Modal : {
           question: 'What are the different spa treatemnt for women you have ?',
             answer: 'Urban Company offers a lot of options that specifically cater to your needs. Here are some spa treatments that we offer' +
             'Aromatherapy Massage- The pressure intensity is low and it specifically helps in relaxing the body and calming the mind' +
             'Swedish Massage- The pressure intensity is medium and it helps in muscle relaxation and stress relaxation' + 
             'Thai Massage- - The pressure intensity is high and it helps boosting your energy, improves flexibility and relaxation of muscles' +
             'Deep Tissue Massage- The pressure intensity is high. It is great of pain relieving and easing chronic muscle tensions' + 
             'Body Scrub Massage- The pressure intensity is low and it helps in getting a youthful, vibrant and hydrated skin.'
        },


       Second_Element_Of_Question_Modal: {
                  question: 'What are the add ons I can opt for if i book a spa for women at home?',
                  answer: 'Apart from the spa treatments, Urban Company offers you a host of add ons that you can book. Whether it is a part of a package you choose (and save money) or alacarte:' +
                  'Face massage- A 20 minute face massage with low to medium intensity will leave your face glowing with improved blood circulation' +
                  'Head &amp; shoulder massage- A 20 minute massage with medium intensity will relieve you of headaches and any upper body tension' +
                  'Foot reflexology- A 20 minute massage with low intensity relieves stress and treats imbalances of organs connected to the feet' +
                  'Hand reflexology- A 20 minute massage with high intensity relieves stress and treats imbalances of organs connected to the hands'
        },
           
        Third_Element_Of_Question_Modal: {
                 question: 'How regularly should I get a spa for women treatment done?',
                 answer: 'The regularity of your spa treatments depends on many factors such as physical, emotional stress along with your budget.' + 
                 'You will feel the benefits after getting the treatment regularly. A spa once in a year or once in a while doesn’t really help.' +
                 ' Get a monthly massage to stay stress free and reap the many benefits that a spa offers.' +
                 'With the Urban Company wellness membership, you can get attractive discounts on your spa treatments!'
        },

        Fourth_Element_Of_Question_Modal: {
            question: 'Will there be a female or a male therapist?',
            answer: 'We only have trained and experienced female therapists.' +
             'Also as of now, we only offer spa treatments for women.'

        },

        Fifth_Element_Of_Question_Modal: {
                 question: 'Should I tell anyone about the allergies or medical conditions I have?',
                 answer: 'Yes. We recommend you inform the service professional about the same before you confirm the appointment. However, there no difference in charges and you will be charged as per our price points.'
        },
         
        Sixth_Element_Of_Question_Modal :{
            question: 'What should I do before a spa treatment?',
            answer: 'Yes. If you communicate with a therapist, the expert will be able to advice you better on the treatment and the pressure you should pick for the spa treatment.'
        },

        Seventh_Element_Of_Question_Modal: {
            question: 'Do I need to take  a bath after the spa at home treatment ?',
            answer: 'A spa treatment is designed to relax you. Here are some things you can do that can help you get the maximum out of a treatment at home:' +
            'Go low on caffeine' +
            'Try not to have a heavy meal before a spa treatment' +
            'Stretch a bit and get comfortable' +
            'Communicate with your therapist and let them know if the pressure is right'
        },

        Eighth_Element_Of_Question_Modal: {
            question: "Can I use my cell phone during a spa at home treatment?",
            answer: 'You certainly can, but we advise you do not. Getting a spa is' +
            ' to relax your senses and a cellphone will always keep you preoccupied.' + 
            'It is good to keep it aside while you are getting a therapeutic session done.'
        },

        Nineth_Element_Of_Question_Modal: {
            question: 'What should I wear for the spa for women?',
            answer: 'You do not have to worry about what to wear during a session. Our experts get every possible equipment needed for a relaxing spa, including what you can wear. The wearable gown is exclusively made available for clients and is not reused.'
        }, 

        Tenth_Element_Of_Question_Modal :{
            question: 'Should I avoid spa for women at home If I am pregnant ?',
            answer: 'If you are in your first trimester, it is advisable to not get a spa. Towards the later part of your pregnancy a spa can actually help. We advise consulting the therapist on what treatment would best work for you.'
        },

        Eleventh_Element_Of_Question_Modal :{
            question: 'I just got waxing done. Can I book a spa at home the same day ?' ,
            answer: 'Your hair follicles open up after you get waxing done. It is best to' +
             'avoid contact with excess moisture right after getting waxing done. Also if you have a sensitive skin, it may cause redness (and swelling) post waxing. Wait at east 24 hours to get a massage done.'
        },

        Twelth_Element_Of_Question_Modal: {
            question: 'Can I gift a spa to a friend?',
            answer: 'With Urban Company’s “Gift a Spa” service, you can book a spa for a friend or a loved one and gift them a day of pampering. Just log on to the app to find the service.'
        },

        Thirteenth_Element_Of_Question_Modal: {
            question: 'What is the minimum amount I can book for a spa for women at home service?',
            answer: 'The minimum booking amount for a spa at home service is Rs.999.'
        },

         Fourteenth_Element_Of_Question_Modal: {
            question: 'Will the therapist clean my house after a spa at home treatment?',
            answer: 'You can sit back and relax, for the therapist will clean up after every spa appointment and leave your home exactly the way it was.'
        },

        Fifteenth_Element_Of_Question_Modal: {
           question: 'What they actually do in spa service?',
           answer: 'Give you the time of your life.'
        },
        Sixteenth_Element_Of_Question_Modal:  {
            question: 'How to rate spa treatment?',
            answer: 'Our salon professionals use the best equipment which is sterile before use. They also ensure minimal dirt and clean up after they have worked their magic. Your home is definitely a safer and a cleaner place than any salon near your home (or anywhere for that matter).'
        }
   }



}





































































//creating state for Electrician srvice page
 export const Electricians = {
     Main_Photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHt9t_aV7OzbpeNHKgVGEHo2bDsTbC_Tx1g&usqp=CAU',
    Main_Heading: ' Electricians in Delhi',
    Sub_Heading_List : {
        First_Element : 'Doorstep repair within 90 mins',
        Second_Element : 'Protection Against Damage Upto INR 10,000',
        Third_Element : '30 day post-services guarantee' 
    },
   Packages_Box: {
       Heading: 'View All Men Services',
       Fields: {
           First_Field: 'Repairs & Fixes',
           Second_Field: 'Electricity Breakdown',
           Third_Field: 'Electrical Wiring',
           Fourth_Field: 'Installation Services',
       },
       Images : {

          First_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/categories/category_v2/category_e1f8fd10.png',
          Second_Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_foeIJuC-s0bZtb_Lg78VMFCJajBakDtQHQ&usqp=CAU',
          Third_Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaI175waS_Ek_Q4ZO9omBvIOxtdGYmbaXcg&usqp=CAU',
          Fourth_Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCDAYMfAcZHKMmE5ogkN2DwzaSaulu8pbLQ&usqp=CAU'
        
       },

   },
   Services_Navbar: {
         First_Link: 'How it work',
         Second_Link: 'Electricians',
         Third_Link: 'Blogs',
         Fourth_Link: 'FAQs',
         Fifth_Link: 'About Electricians'
   },

   How_it_Work_Column: {
     heading: 'How it Works',
     How_It_Work_First_Element: {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg',
           Text: 'Choose a Salon service',
           Sub_Text: 'Select from various salon packages & services',
       },
       How_It_Work_Second_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_899773a0.png',
        Text: 'Choose your time-slot',
        Sub_Text: 'We service from 9am-7pm',
    },
        How_It_Work_Third_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_89c4ec40.png',
        Text: 'Relax and enjoy salon service',
        Sub_Text: 'Our Professionals will get in touch with you an hour before the Services'
    }
   },
   Professionals_Rating_Column: {
       headings : 'Electricians',
       Professionals_Cards_List : [
           {
               Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56b45626b637639e7eed43de/1521523493831-2ca9d8a1484b64ac8d045eb7818d27c6.jpeg',
               Name: 'Tripti Rana',
               Address: 'CR Park, New Delhi, Delhi, India',
               Commenter_Name_Alphabate: 'S',
               Commenter_Name: 'Shweta',
               Rating: '5.0',
               Comment: 'I want to give her all the compliments, Punctual, hygenic, polite, patient, well groomed, expert service and eye to details ',
               Extra_Comments: {

                    Commenter_Name_Alphabate: 'N',
                    Commenter_Name: 'Nitish',
                    Comment: 'She did a good job overall. My wife was very heppy with service'    
               },
               
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58ae9421d451ceb649f43089/1609232457477-293a6e.jpeg',   
            Name: 'Deepika Gupta',
            Address: 'Nihal Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'K',
            Commenter_Name: 'Kanika',
            Rating: '5.0',
            Comment: 'Best beauticians I have ever found perfect in her work super polite and very experienced',
            Extra_Comments:  {

                     Commenter_Name_Alphabate: 'A',
                     Commenter_Name: 'Anita',
                     Comment: 'Deepika Was hygenic, well groomed and she was really particular in giving a eye to each detail'    
                },
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56e913631a6caa5d3bd63392/1529904572825-48ffbd8125b5cfa09404db7446d74fe6.jpeg',   
            Name: 'Pooja Kumari',
            Address: 'Neb sarai, Block J, Saket, New Delhi, Delhi, India',
            Commenter_Name_Alphabate: 'D',
            Commenter_Name: 'Divyanshi',
            Rating: '5.0',
            Comment: 'Very friendly, understanding and knowledgeable service. Loved it',
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'P',
                    Commenter_Name: 'Preksha',
                    Comment: 'Pooja did an excellent job.. loved her service'
                }
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5a82b5c602614b5f007781aa/1536661908268-fae31dcd7c9cdb624c4e6a8d5e775b12.jpeg',   
            Name: 'Soni Srivastava',
            Address: 'Dwarka, Delhi, India',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/584fa25dd3269aee2c5c681b/1517894439202-74cb860b6ca0d57e8b1f36f4083e9089.png',   
            Name: 'Sandhya Sharma',
            Address: '3rd floor, JP House, Plot No. 172 Lane No. 2, Westend MArg ',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/568fb00f4e81d99c35b4bd51/1538118244891-6091599123fddd241b02b11366b95bf8.jpeg',   
            Name: 'Pooja Chauhan',
            Address: 'Budh Vihar Phase I, Budh Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'R',
            Commenter_Name: 'Revanshi',
            Rating: '5.0',
            Comment: 'I want ms.Pooja Chauhan again as my service expert next time too. Great service.' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58b5331e455dc84937b40ce0/1530073428870-b75256f2246d56c432c21ed9d14e044d.jpeg',   
            Name: 'Sanju Suryavanshi',
            Address: 'Naraina Village, Naraina, Delhi, India',
            Commenter_Name_Alphabate: 'A',
            Commenter_Name: 'Avni',
            Rating: '5.0',
            Comment: 'She was really superb at her work... PainLess Wax..' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
        
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5b879900519a69220036eb13/1535691152402-f6eb392710af7e289b36d08a44a84b6a.jpeg',   
            Name: 'Alka kapoor',
            Address: 'Sant Nagar, Burari, Delhi, India',
            Commenter_Name_Alphabate: 'H',
            Commenter_Name: 'Harpreet',
            Rating: '5.0',
            Comment: 'Good work and patient technician m. But Alka kapoor didn,t provide wax enough for a plus size person, also the aporn for waxing was very small. ' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'S',
                    Commenter_Name: 'Sudha',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        }
       ]

   },







//creating also lookes and  images carasou
Also_Looked_At_Services : {
    heading: 'People also lookes At',
    link_items_list: [
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bc824070.jpeg',
            text_lable: 'Massage Therapists At Home For Women',
            link:'',
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_3c671dc0.jpeg',
            text_lable: 'Microwave Repair Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a91b73d0.jpeg',
            text_lable: 'Electricians',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg',
            text_lable: 'Home Cleaning Service Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_f5a01e90.jpeg',
            text_lable: 'Disinfection Service',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_8d9f2900.png',
            text_lable: 'Beauty Service Professionals',
            link: ''
        }
    ]
},
 













   //creating services text names for services near me

   Related_Services_Column: {
     heading: 'Popular Services Near You',
     links:   [
       {link: 'Electricians'},
       {link: 'Microwave Repair'},
       {link: 'Cleaning Services'},
       {link: 'Salons'},
       {link:'Spa'}
    ],

   },


   
   Related_Services_Blogs_heading : {
       heading:'Popular Blog posts on Beauty'
   },

   Related_Services_Blogs_Carasoul : [
       {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/14180910/multani-mitti-face-mask-.jpg',
        textlable: 'Multani Mitti Packs: Everything About the Magic Mud',
        link: 'https://blog.urbancompany.com/beauty/multani-mitti-face-packs/'
        },

        {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/30163947/rose-water-for-dry-skin.jpg',
        textlable: 'Miracles Happen When You Use Rose Water for Dry Skin!',
        link: 'https://blog.urbancompany.com/beauty/rose-water-for-dry-skin/'},

        {
             image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/21190929/Rose-Water-for-Hair.jpg',
             textlable: '5 Reasons Why You Should Use Rose Water for Hair',
             link:'https://blog.urbancompany.com/beauty/rose-water-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/18153055/Threading-Do-and-Dont.jpg',
            textlable: 'What to Do (and Not Do) After a Salon Visit',
            link:'https://blog.urbancompany.com/beauty/dos-donts-salon-visit/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/11145102/rose-water-for-skin-feature-image.jpg',
            textlable: 'Best Ways to Use Rose Water for Skin',
            link: 'https://blog.urbancompany.com/beauty/rose-water-for-skin/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/12/25174046/apple-cider-hero1.png',
            textlable: 'Apple Cider Vinegar for Hair: Why Use It and How (Part 2)',
            link: 'https://blog.urbancompany.com/beauty/apple-cider-vinegar-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/06134012/lavender-1.png',
            textlable: 'How to Use Lavender Oil for Hair Growth & More',
            link: 'https://blog.urbancompany.com/beauty/lavender-oil-for-hair-growth/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25182257/new.jpg',
            textlable: 'Cocoa Butter Uses for Skin and Hair (DIY Recipes Included!)',
            link: 'https://blog.urbancompany.com/beauty/cocoa-butter-uses/'
        }
   ],








//creating object for latest customer reviews
    Latest_Customer_Reviews_Average_Column: {
        heading: 'Latest customer reviews',
        sub_heading: 'of Beauty Service Professionals in New Delhi',
        rating: '4.8',
        number_of_reviews: 'based on 789,789 reviews',
        view_more_comment: 'https://www.urbancompany.com/customer_reviews/delhi-ncr-salon-at-home'
    }
,










   

  //creating questions list for service page 

  Question_And_Answer: [
      
    {
       question: 'What are the different spa treatemnt for women you have ?',
        
    },


    {
       question: 'What are the add ons I can opt for if i book a spa for women at home?',
            
    },
       
    {
       question: 'How regularly should I get a spa for women treatment done?',
            
    },

    {
        question: 'Will there be a female or a male therapist?'

    },

    {
        question: 'Should I tell anyone about the allergies or medical conditions I have?',
    },
     
    {
        question: 'What should I do before a spa treatment?',
    },

    {
        question: 'Do I need to take  a bath after the spa at home treatment ?',
    },

    {
        question: "Can I use my cell phone during a spa at home treatment?",
       
    },

    {
        question: 'What should I wear for the spa for women?',
    }, 

    {
        question: 'Should I avoid spa for women at home If I am pregnant ?',
    },

    {
        question: 'I just got waxing done. Can I book a spa at home the same day ?',
    },

    {
        question: 'Can I gift a spa to a friend?',
    },

    {
        question: 'What is the minimum amount I can book for a spa for women at home service?',
    },

    {
        question: 'Will the therapist clean my house after a spa at home treatment?',
    },

    {
       question: 'What they actually do in spa service?',
    },
    {
        question: 'How to rate spa treatment?',
    }
]
,






    
    




    //creating state object for most asked questions and answer

   Modal_Question_And_Answer: {
      
       First_Element_Of_Question_Modal : {
           question: 'What are the different spa treatemnt for women you have ?',
             answer: 'Urban Company offers a lot of options that specifically cater to your needs. Here are some spa treatments that we offer' +
             'Aromatherapy Massage- The pressure intensity is low and it specifically helps in relaxing the body and calming the mind' +
             'Swedish Massage- The pressure intensity is medium and it helps in muscle relaxation and stress relaxation' + 
             'Thai Massage- - The pressure intensity is high and it helps boosting your energy, improves flexibility and relaxation of muscles' +
             'Deep Tissue Massage- The pressure intensity is high. It is great of pain relieving and easing chronic muscle tensions' + 
             'Body Scrub Massage- The pressure intensity is low and it helps in getting a youthful, vibrant and hydrated skin.'
        },


       Second_Element_Of_Question_Modal: {
                  question: 'What are the add ons I can opt for if i book a spa for women at home?',
                  answer: 'Apart from the spa treatments, Urban Company offers you a host of add ons that you can book. Whether it is a part of a package you choose (and save money) or alacarte:' +
                  'Face massage- A 20 minute face massage with low to medium intensity will leave your face glowing with improved blood circulation' +
                  'Head &amp; shoulder massage- A 20 minute massage with medium intensity will relieve you of headaches and any upper body tension' +
                  'Foot reflexology- A 20 minute massage with low intensity relieves stress and treats imbalances of organs connected to the feet' +
                  'Hand reflexology- A 20 minute massage with high intensity relieves stress and treats imbalances of organs connected to the hands'
        },
           
        Third_Element_Of_Question_Modal: {
                 question: 'How regularly should I get a spa for women treatment done?',
                 answer: 'The regularity of your spa treatments depends on many factors such as physical, emotional stress along with your budget.' + 
                 'You will feel the benefits after getting the treatment regularly. A spa once in a year or once in a while doesn’t really help.' +
                 ' Get a monthly massage to stay stress free and reap the many benefits that a spa offers.' +
                 'With the Urban Company wellness membership, you can get attractive discounts on your spa treatments!'
        },

        Fourth_Element_Of_Question_Modal: {
            question: 'Will there be a female or a male therapist?',
            answer: 'We only have trained and experienced female therapists.' +
             'Also as of now, we only offer spa treatments for women.'

        },

        Fifth_Element_Of_Question_Modal: {
                 question: 'Should I tell anyone about the allergies or medical conditions I have?',
                 answer: 'Yes. We recommend you inform the service professional about the same before you confirm the appointment. However, there no difference in charges and you will be charged as per our price points.'
        },
         
        Sixth_Element_Of_Question_Modal :{
            question: 'What should I do before a spa treatment?',
            answer: 'Yes. If you communicate with a therapist, the expert will be able to advice you better on the treatment and the pressure you should pick for the spa treatment.'
        },

        Seventh_Element_Of_Question_Modal: {
            question: 'Do I need to take  a bath after the spa at home treatment ?',
            answer: 'A spa treatment is designed to relax you. Here are some things you can do that can help you get the maximum out of a treatment at home:' +
            'Go low on caffeine' +
            'Try not to have a heavy meal before a spa treatment' +
            'Stretch a bit and get comfortable' +
            'Communicate with your therapist and let them know if the pressure is right'
        },

        Eighth_Element_Of_Question_Modal: {
            question: "Can I use my cell phone during a spa at home treatment?",
            answer: 'You certainly can, but we advise you do not. Getting a spa is' +
            ' to relax your senses and a cellphone will always keep you preoccupied.' + 
            'It is good to keep it aside while you are getting a therapeutic session done.'
        },

        Nineth_Element_Of_Question_Modal: {
            question: 'What should I wear for the spa for women?',
            answer: 'You do not have to worry about what to wear during a session. Our experts get every possible equipment needed for a relaxing spa, including what you can wear. The wearable gown is exclusively made available for clients and is not reused.'
        }, 

        Tenth_Element_Of_Question_Modal :{
            question: 'Should I avoid spa for women at home If I am pregnant ?',
            answer: 'If you are in your first trimester, it is advisable to not get a spa. Towards the later part of your pregnancy a spa can actually help. We advise consulting the therapist on what treatment would best work for you.'
        },

        Eleventh_Element_Of_Question_Modal :{
            question: 'I just got waxing done. Can I book a spa at home the same day ?' ,
            answer: 'Your hair follicles open up after you get waxing done. It is best to' +
             'avoid contact with excess moisture right after getting waxing done. Also if you have a sensitive skin, it may cause redness (and swelling) post waxing. Wait at east 24 hours to get a massage done.'
        },

        Twelth_Element_Of_Question_Modal: {
            question: 'Can I gift a spa to a friend?',
            answer: 'With Urban Company’s “Gift a Spa” service, you can book a spa for a friend or a loved one and gift them a day of pampering. Just log on to the app to find the service.'
        },

        Thirteenth_Element_Of_Question_Modal: {
            question: 'What is the minimum amount I can book for a spa for women at home service?',
            answer: 'The minimum booking amount for a spa at home service is Rs.999.'
        },

         Fourteenth_Element_Of_Question_Modal: {
            question: 'Will the therapist clean my house after a spa at home treatment?',
            answer: 'You can sit back and relax, for the therapist will clean up after every spa appointment and leave your home exactly the way it was.'
        },

        Fifteenth_Element_Of_Question_Modal: {
           question: 'What they actually do in spa service?',
           answer: 'Give you the time of your life.'
        },
        Sixteenth_Element_Of_Question_Modal:  {
            question: 'How to rate spa treatment?',
            answer: 'Our salon professionals use the best equipment which is sterile before use. They also ensure minimal dirt and clean up after they have worked their magic. Your home is definitely a safer and a cleaner place than any salon near your home (or anywhere for that matter).'
        }
   }



}












































//creating state for Plumber service page
   export const Plumbers = {
    Main_Photo: 'https://images.unsplash.com/photo-1578830610344-c9ad6d6531d8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBsdW1iaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',   
    Main_Heading: 'Best Plumbers in New Delhi',
    Sub_Heading_List : {
        First_Element : 'Doorstep repair within 45 mins',
        Second_Element : 'Protection Against Damage Upto INR 10,000',
        Third_Element : '30 Day Past-Service guarante' 
    },
   Packages_Box: {
       Heading: 'View All Men Services',
       Fields: {
           First_Field: 'Pipe / Tap Fitting',
           Second_Field: 'Water Leakages',
           Third_Field: 'Repair & Fixes',
           Fourth_Field: 'Installation Services',
       },
       Images : {

                 First_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/categories/category_v2/category_e1f8fd10.png',
                 Second_Image: 'data:image/jpeg;base64,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',
                 Third_Image: 'data:image/jpeg;base64,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',
                 Fourth_Image: 'data:image/jpeg;base64,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'
         
       },

   },
   Services_Navbar: {
         First_Link: 'How it work',
         Second_Link: 'Plumbers',
         Third_Link: 'Blogs',
         Fourth_Link: 'FAQs',
         Fifth_Link: 'About Plumbers'
   },

   How_it_Work_Column: {
     heading: 'How it Works',
     How_It_Work_First_Element: {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg',
           Text: 'Choose a Salon service',
           Sub_Text: 'Select from various salon packages & services',
       },
       How_It_Work_Second_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_899773a0.png',
        Text: 'Choose your time-slot',
        Sub_Text: 'We service from 9am-7pm',
    },
        How_It_Work_Third_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_89c4ec40.png',
        Text: 'Relax and enjoy salon service',
        Sub_Text: 'Our Professionals will get in touch with you an hour before the Services'
    }
   },
   Professionals_Rating_Column: {
       headings : 'Plumbers',
       Professionals_Cards_List : [
           {
               Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56b45626b637639e7eed43de/1521523493831-2ca9d8a1484b64ac8d045eb7818d27c6.jpeg',
               Name: 'Tripti Rana',
               Address: 'CR Park, New Delhi, Delhi, India',
               Commenter_Name_Alphabate: 'S',
               Commenter_Name: 'Shweta',
               Rating: '5.0',
               Comment: 'I want to give her all the compliments, Punctual, hygenic, polite, patient, well groomed, expert service and eye to details ',
               Extra_Comments: {

                    Commenter_Name_Alphabate: 'N',
                    Commenter_Name: 'Nitish',
                    Comment: 'She did a good job overall. My wife was very heppy with service'    
               },
               
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58ae9421d451ceb649f43089/1609232457477-293a6e.jpeg',   
            Name: 'Deepika Gupta',
            Address: 'Nihal Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'K',
            Commenter_Name: 'Kanika',
            Rating: '5.0',
            Comment: 'Best beauticians I have ever found perfect in her work super polite and very experienced',
            Extra_Comments:  {

                     Commenter_Name_Alphabate: 'A',
                     Commenter_Name: 'Anita',
                     Comment: 'Deepika Was hygenic, well groomed and she was really particular in giving a eye to each detail'    
                },
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56e913631a6caa5d3bd63392/1529904572825-48ffbd8125b5cfa09404db7446d74fe6.jpeg',   
            Name: 'Pooja Kumari',
            Address: 'Neb sarai, Block J, Saket, New Delhi, Delhi, India',
            Commenter_Name_Alphabate: 'D',
            Commenter_Name: 'Divyanshi',
            Rating: '5.0',
            Comment: 'Very friendly, understanding and knowledgeable service. Loved it',
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'P',
                    Commenter_Name: 'Preksha',
                    Comment: 'Pooja did an excellent job.. loved her service'
                }
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5a82b5c602614b5f007781aa/1536661908268-fae31dcd7c9cdb624c4e6a8d5e775b12.jpeg',   
            Name: 'Soni Srivastava',
            Address: 'Dwarka, Delhi, India',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/584fa25dd3269aee2c5c681b/1517894439202-74cb860b6ca0d57e8b1f36f4083e9089.png',   
            Name: 'Sandhya Sharma',
            Address: '3rd floor, JP House, Plot No. 172 Lane No. 2, Westend MArg ',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/568fb00f4e81d99c35b4bd51/1538118244891-6091599123fddd241b02b11366b95bf8.jpeg',   
            Name: 'Pooja Chauhan',
            Address: 'Budh Vihar Phase I, Budh Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'R',
            Commenter_Name: 'Revanshi',
            Rating: '5.0',
            Comment: 'I want ms.Pooja Chauhan again as my service expert next time too. Great service.' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58b5331e455dc84937b40ce0/1530073428870-b75256f2246d56c432c21ed9d14e044d.jpeg',   
            Name: 'Sanju Suryavanshi',
            Address: 'Naraina Village, Naraina, Delhi, India',
            Commenter_Name_Alphabate: 'A',
            Commenter_Name: 'Avni',
            Rating: '5.0',
            Comment: 'She was really superb at her work... PainLess Wax..' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
        
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5b879900519a69220036eb13/1535691152402-f6eb392710af7e289b36d08a44a84b6a.jpeg',   
            Name: 'Alka kapoor',
            Address: 'Sant Nagar, Burari, Delhi, India',
            Commenter_Name_Alphabate: 'H',
            Commenter_Name: 'Harpreet',
            Rating: '5.0',
            Comment: 'Good work and patient technician m. But Alka kapoor didn,t provide wax enough for a plus size person, also the aporn for waxing was very small. ' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'S',
                    Commenter_Name: 'Sudha',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        }
       ]

   },







//creating also lookes and  images carasou
Also_Looked_At_Services : {
    heading: 'People also lookes At',
    link_items_list: [
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bc824070.jpeg',
            text_lable: 'Massage Therapists At Home For Women',
            link:'',
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_3c671dc0.jpeg',
            text_lable: 'Microwave Repair Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a91b73d0.jpeg',
            text_lable: 'Electricians',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg',
            text_lable: 'Home Cleaning Service Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_f5a01e90.jpeg',
            text_lable: 'Disinfection Service',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_8d9f2900.png',
            text_lable: 'Beauty Service Professionals',
            link: ''
        }
    ]
},
 













   //creating services text names for services near me

   Related_Services_Column: {
     heading: 'Popular Services Near You',
     links:   [
       {link: 'Electricians'},
       {link: 'Microwave Repair'},
       {link: 'Cleaning Services'},
       {link: 'Salons'},
       {link:'Spa'}
    ],

   },


   
   Related_Services_Blogs_heading : {
       heading:'Popular Blog posts on Beauty'
   },

   Related_Services_Blogs_Carasoul : [
       {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/14180910/multani-mitti-face-mask-.jpg',
        textlable: 'Multani Mitti Packs: Everything About the Magic Mud',
        link: 'https://blog.urbancompany.com/beauty/multani-mitti-face-packs/'
        },

        {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/30163947/rose-water-for-dry-skin.jpg',
        textlable: 'Miracles Happen When You Use Rose Water for Dry Skin!',
        link: 'https://blog.urbancompany.com/beauty/rose-water-for-dry-skin/'},

        {
             image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/21190929/Rose-Water-for-Hair.jpg',
             textlable: '5 Reasons Why You Should Use Rose Water for Hair',
             link:'https://blog.urbancompany.com/beauty/rose-water-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/18153055/Threading-Do-and-Dont.jpg',
            textlable: 'What to Do (and Not Do) After a Salon Visit',
            link:'https://blog.urbancompany.com/beauty/dos-donts-salon-visit/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/11145102/rose-water-for-skin-feature-image.jpg',
            textlable: 'Best Ways to Use Rose Water for Skin',
            link: 'https://blog.urbancompany.com/beauty/rose-water-for-skin/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/12/25174046/apple-cider-hero1.png',
            textlable: 'Apple Cider Vinegar for Hair: Why Use It and How (Part 2)',
            link: 'https://blog.urbancompany.com/beauty/apple-cider-vinegar-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/06134012/lavender-1.png',
            textlable: 'How to Use Lavender Oil for Hair Growth & More',
            link: 'https://blog.urbancompany.com/beauty/lavender-oil-for-hair-growth/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25182257/new.jpg',
            textlable: 'Cocoa Butter Uses for Skin and Hair (DIY Recipes Included!)',
            link: 'https://blog.urbancompany.com/beauty/cocoa-butter-uses/'
        }
   ],








//creating object for latest customer reviews
    Latest_Customer_Reviews_Average_Column: {
        heading: 'Latest customer reviews',
        sub_heading: 'of Beauty Service Professionals in New Delhi',
        rating: '4.8',
        number_of_reviews: 'based on 789,789 reviews',
        view_more_comment: 'https://www.urbancompany.com/customer_reviews/delhi-ncr-salon-at-home'
    }
,










   

  //creating questions list for service page 

  Question_And_Answer: [
      
    {
       question: 'What are the different spa treatemnt for women you have ?',
        
    },


    {
       question: 'What are the add ons I can opt for if i book a spa for women at home?',
            
    },
       
    {
       question: 'How regularly should I get a spa for women treatment done?',
            
    },

    {
        question: 'Will there be a female or a male therapist?'

    },

    {
        question: 'Should I tell anyone about the allergies or medical conditions I have?',
    },
     
    {
        question: 'What should I do before a spa treatment?',
    },

    {
        question: 'Do I need to take  a bath after the spa at home treatment ?',
    },

    {
        question: "Can I use my cell phone during a spa at home treatment?",
       
    },

    {
        question: 'What should I wear for the spa for women?',
    }, 

    {
        question: 'Should I avoid spa for women at home If I am pregnant ?',
    },

    {
        question: 'I just got waxing done. Can I book a spa at home the same day ?',
    },

    {
        question: 'Can I gift a spa to a friend?',
    },

    {
        question: 'What is the minimum amount I can book for a spa for women at home service?',
    },

    {
        question: 'Will the therapist clean my house after a spa at home treatment?',
    },

    {
       question: 'What they actually do in spa service?',
    },
    {
        question: 'How to rate spa treatment?',
    }
]
,






    
    




    //creating state object for most asked questions and answer

   Modal_Question_And_Answer: {
      
       First_Element_Of_Question_Modal : {
           question: 'What are the different spa treatemnt for women you have ?',
             answer: 'Urban Company offers a lot of options that specifically cater to your needs. Here are some spa treatments that we offer' +
             'Aromatherapy Massage- The pressure intensity is low and it specifically helps in relaxing the body and calming the mind' +
             'Swedish Massage- The pressure intensity is medium and it helps in muscle relaxation and stress relaxation' + 
             'Thai Massage- - The pressure intensity is high and it helps boosting your energy, improves flexibility and relaxation of muscles' +
             'Deep Tissue Massage- The pressure intensity is high. It is great of pain relieving and easing chronic muscle tensions' + 
             'Body Scrub Massage- The pressure intensity is low and it helps in getting a youthful, vibrant and hydrated skin.'
        },


       Second_Element_Of_Question_Modal: {
                  question: 'What are the add ons I can opt for if i book a spa for women at home?',
                  answer: 'Apart from the spa treatments, Urban Company offers you a host of add ons that you can book. Whether it is a part of a package you choose (and save money) or alacarte:' +
                  'Face massage- A 20 minute face massage with low to medium intensity will leave your face glowing with improved blood circulation' +
                  'Head &amp; shoulder massage- A 20 minute massage with medium intensity will relieve you of headaches and any upper body tension' +
                  'Foot reflexology- A 20 minute massage with low intensity relieves stress and treats imbalances of organs connected to the feet' +
                  'Hand reflexology- A 20 minute massage with high intensity relieves stress and treats imbalances of organs connected to the hands'
        },
           
        Third_Element_Of_Question_Modal: {
                 question: 'How regularly should I get a spa for women treatment done?',
                 answer: 'The regularity of your spa treatments depends on many factors such as physical, emotional stress along with your budget.' + 
                 'You will feel the benefits after getting the treatment regularly. A spa once in a year or once in a while doesn’t really help.' +
                 ' Get a monthly massage to stay stress free and reap the many benefits that a spa offers.' +
                 'With the Urban Company wellness membership, you can get attractive discounts on your spa treatments!'
        },

        Fourth_Element_Of_Question_Modal: {
            question: 'Will there be a female or a male therapist?',
            answer: 'We only have trained and experienced female therapists.' +
             'Also as of now, we only offer spa treatments for women.'

        },

        Fifth_Element_Of_Question_Modal: {
                 question: 'Should I tell anyone about the allergies or medical conditions I have?',
                 answer: 'Yes. We recommend you inform the service professional about the same before you confirm the appointment. However, there no difference in charges and you will be charged as per our price points.'
        },
         
        Sixth_Element_Of_Question_Modal :{
            question: 'What should I do before a spa treatment?',
            answer: 'Yes. If you communicate with a therapist, the expert will be able to advice you better on the treatment and the pressure you should pick for the spa treatment.'
        },

        Seventh_Element_Of_Question_Modal: {
            question: 'Do I need to take  a bath after the spa at home treatment ?',
            answer: 'A spa treatment is designed to relax you. Here are some things you can do that can help you get the maximum out of a treatment at home:' +
            'Go low on caffeine' +
            'Try not to have a heavy meal before a spa treatment' +
            'Stretch a bit and get comfortable' +
            'Communicate with your therapist and let them know if the pressure is right'
        },

        Eighth_Element_Of_Question_Modal: {
            question: "Can I use my cell phone during a spa at home treatment?",
            answer: 'You certainly can, but we advise you do not. Getting a spa is' +
            ' to relax your senses and a cellphone will always keep you preoccupied.' + 
            'It is good to keep it aside while you are getting a therapeutic session done.'
        },

        Nineth_Element_Of_Question_Modal: {
            question: 'What should I wear for the spa for women?',
            answer: 'You do not have to worry about what to wear during a session. Our experts get every possible equipment needed for a relaxing spa, including what you can wear. The wearable gown is exclusively made available for clients and is not reused.'
        }, 

        Tenth_Element_Of_Question_Modal :{
            question: 'Should I avoid spa for women at home If I am pregnant ?',
            answer: 'If you are in your first trimester, it is advisable to not get a spa. Towards the later part of your pregnancy a spa can actually help. We advise consulting the therapist on what treatment would best work for you.'
        },

        Eleventh_Element_Of_Question_Modal :{
            question: 'I just got waxing done. Can I book a spa at home the same day ?' ,
            answer: 'Your hair follicles open up after you get waxing done. It is best to' +
             'avoid contact with excess moisture right after getting waxing done. Also if you have a sensitive skin, it may cause redness (and swelling) post waxing. Wait at east 24 hours to get a massage done.'
        },

        Twelth_Element_Of_Question_Modal: {
            question: 'Can I gift a spa to a friend?',
            answer: 'With Urban Company’s “Gift a Spa” service, you can book a spa for a friend or a loved one and gift them a day of pampering. Just log on to the app to find the service.'
        },

        Thirteenth_Element_Of_Question_Modal: {
            question: 'What is the minimum amount I can book for a spa for women at home service?',
            answer: 'The minimum booking amount for a spa at home service is Rs.999.'
        },

         Fourteenth_Element_Of_Question_Modal: {
            question: 'Will the therapist clean my house after a spa at home treatment?',
            answer: 'You can sit back and relax, for the therapist will clean up after every spa appointment and leave your home exactly the way it was.'
        },

        Fifteenth_Element_Of_Question_Modal: {
           question: 'What they actually do in spa service?',
           answer: 'Give you the time of your life.'
        },
        Sixteenth_Element_Of_Question_Modal:  {
            question: 'How to rate spa treatment?',
            answer: 'Our salon professionals use the best equipment which is sterile before use. They also ensure minimal dirt and clean up after they have worked their magic. Your home is definitely a safer and a cleaner place than any salon near your home (or anywhere for that matter).'
        }
   }



}



































































































//creating state for Carpainter service page
 export const Carpainters = {
    Main_Photo: 'https://cdn.pixabay.com/photo/2019/02/23/07/21/carpenter-4015109__340.jpg', 
    Main_Heading: 'Best Carpenters in New Delhi',
    Sub_Heading_List : {
        First_Element : 'Best Carpanting services',
        Second_Element : 'Protection Against Damage Upto INR 10,000',
        Third_Element : '30 Day post-services guarntee' 
    },
   Packages_Box: {
       Heading: 'View All Men Services',
       Fields: {
           First_Field: 'Exclusive Packages',
           Second_Field: 'New Furniture',
           Third_Field: 'Polishing',
           Fourth_Field: 'Other WoodWork',
       },
       Images : {
         First_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/categories/category_v2/category_e1f8fd10.png',
         Second_Image: "data:image/jpeg;base64,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",
         Third_Image: "data:image/jpeg;base64,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",
         Fourth_Image: "data:image/jpeg;base64,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"
       },

   },
   Services_Navbar: {
         First_Link: 'How it work',
         Second_Link: 'Carpanter',
         Third_Link: 'Blogs',
         Fourth_Link: 'FAQs',
         Fifth_Link: 'About Carpanter'
   },

   How_it_Work_Column: {
     heading: 'How it Works',
     How_It_Work_First_Element: {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg',
           Text: 'Choose a Salon service',
           Sub_Text: 'Select from various salon packages & services',
       },
       How_It_Work_Second_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_899773a0.png',
        Text: 'Choose your time-slot',
        Sub_Text: 'We service from 9am-7pm',
    },
        How_It_Work_Third_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_89c4ec40.png',
        Text: 'Relax and enjoy salon service',
        Sub_Text: 'Our Professionals will get in touch with you an hour before the Services'
    }
   },
   Professionals_Rating_Column: {
       headings : 'Carpante',
       Professionals_Cards_List : [
           {
               Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56b45626b637639e7eed43de/1521523493831-2ca9d8a1484b64ac8d045eb7818d27c6.jpeg',
               Name: 'Tripti Rana',
               Address: 'CR Park, New Delhi, Delhi, India',
               Commenter_Name_Alphabate: 'S',
               Commenter_Name: 'Shweta',
               Rating: '5.0',
               Comment: 'I want to give her all the compliments, Punctual, hygenic, polite, patient, well groomed, expert service and eye to details ',
               Extra_Comments: {

                    Commenter_Name_Alphabate: 'N',
                    Commenter_Name: 'Nitish',
                    Comment: 'She did a good job overall. My wife was very heppy with service'    
               },
               
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58ae9421d451ceb649f43089/1609232457477-293a6e.jpeg',   
            Name: 'Deepika Gupta',
            Address: 'Nihal Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'K',
            Commenter_Name: 'Kanika',
            Rating: '5.0',
            Comment: 'Best beauticians I have ever found perfect in her work super polite and very experienced',
            Extra_Comments:  {

                     Commenter_Name_Alphabate: 'A',
                     Commenter_Name: 'Anita',
                     Comment: 'Deepika Was hygenic, well groomed and she was really particular in giving a eye to each detail'    
                },
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56e913631a6caa5d3bd63392/1529904572825-48ffbd8125b5cfa09404db7446d74fe6.jpeg',   
            Name: 'Pooja Kumari',
            Address: 'Neb sarai, Block J, Saket, New Delhi, Delhi, India',
            Commenter_Name_Alphabate: 'D',
            Commenter_Name: 'Divyanshi',
            Rating: '5.0',
            Comment: 'Very friendly, understanding and knowledgeable service. Loved it',
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'P',
                    Commenter_Name: 'Preksha',
                    Comment: 'Pooja did an excellent job.. loved her service'
                }
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5a82b5c602614b5f007781aa/1536661908268-fae31dcd7c9cdb624c4e6a8d5e775b12.jpeg',   
            Name: 'Soni Srivastava',
            Address: 'Dwarka, Delhi, India',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/584fa25dd3269aee2c5c681b/1517894439202-74cb860b6ca0d57e8b1f36f4083e9089.png',   
            Name: 'Sandhya Sharma',
            Address: '3rd floor, JP House, Plot No. 172 Lane No. 2, Westend MArg ',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/568fb00f4e81d99c35b4bd51/1538118244891-6091599123fddd241b02b11366b95bf8.jpeg',   
            Name: 'Pooja Chauhan',
            Address: 'Budh Vihar Phase I, Budh Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'R',
            Commenter_Name: 'Revanshi',
            Rating: '5.0',
            Comment: 'I want ms.Pooja Chauhan again as my service expert next time too. Great service.' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58b5331e455dc84937b40ce0/1530073428870-b75256f2246d56c432c21ed9d14e044d.jpeg',   
            Name: 'Sanju Suryavanshi',
            Address: 'Naraina Village, Naraina, Delhi, India',
            Commenter_Name_Alphabate: 'A',
            Commenter_Name: 'Avni',
            Rating: '5.0',
            Comment: 'She was really superb at her work... PainLess Wax..' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
        
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5b879900519a69220036eb13/1535691152402-f6eb392710af7e289b36d08a44a84b6a.jpeg',   
            Name: 'Alka kapoor',
            Address: 'Sant Nagar, Burari, Delhi, India',
            Commenter_Name_Alphabate: 'H',
            Commenter_Name: 'Harpreet',
            Rating: '5.0',
            Comment: 'Good work and patient technician m. But Alka kapoor didn,t provide wax enough for a plus size person, also the aporn for waxing was very small. ' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'S',
                    Commenter_Name: 'Sudha',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        }
       ]

   },







//creating also lookes and  images carasou
Also_Looked_At_Services : {
    heading: 'People also lookes At',
    link_items_list: [
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bc824070.jpeg',
            text_lable: 'Massage Therapists At Home For Women',
            link:'',
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_3c671dc0.jpeg',
            text_lable: 'Microwave Repair Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a91b73d0.jpeg',
            text_lable: 'Electricians',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg',
            text_lable: 'Home Cleaning Service Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_f5a01e90.jpeg',
            text_lable: 'Disinfection Service',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_8d9f2900.png',
            text_lable: 'Beauty Service Professionals',
            link: ''
        }
    ]
},
 













   //creating services text names for services near me

   Related_Services_Column: {
     heading: 'Popular Services Near You',
     links:   [
       {link: 'Electricians'},
       {link: 'Microwave Repair'},
       {link: 'Cleaning Services'},
       {link: 'Salons'},
       {link:'Spa'}
    ],

   },


   
   Related_Services_Blogs_heading : {
       heading:'Popular Blog posts on Beauty'
   },

   Related_Services_Blogs_Carasoul : [
       {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/14180910/multani-mitti-face-mask-.jpg',
        textlable: 'Multani Mitti Packs: Everything About the Magic Mud',
        link: 'https://blog.urbancompany.com/beauty/multani-mitti-face-packs/'
        },

        {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/30163947/rose-water-for-dry-skin.jpg',
        textlable: 'Miracles Happen When You Use Rose Water for Dry Skin!',
        link: 'https://blog.urbancompany.com/beauty/rose-water-for-dry-skin/'},

        {
             image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/21190929/Rose-Water-for-Hair.jpg',
             textlable: '5 Reasons Why You Should Use Rose Water for Hair',
             link:'https://blog.urbancompany.com/beauty/rose-water-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/18153055/Threading-Do-and-Dont.jpg',
            textlable: 'What to Do (and Not Do) After a Salon Visit',
            link:'https://blog.urbancompany.com/beauty/dos-donts-salon-visit/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/11145102/rose-water-for-skin-feature-image.jpg',
            textlable: 'Best Ways to Use Rose Water for Skin',
            link: 'https://blog.urbancompany.com/beauty/rose-water-for-skin/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/12/25174046/apple-cider-hero1.png',
            textlable: 'Apple Cider Vinegar for Hair: Why Use It and How (Part 2)',
            link: 'https://blog.urbancompany.com/beauty/apple-cider-vinegar-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/06134012/lavender-1.png',
            textlable: 'How to Use Lavender Oil for Hair Growth & More',
            link: 'https://blog.urbancompany.com/beauty/lavender-oil-for-hair-growth/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25182257/new.jpg',
            textlable: 'Cocoa Butter Uses for Skin and Hair (DIY Recipes Included!)',
            link: 'https://blog.urbancompany.com/beauty/cocoa-butter-uses/'
        }
   ],








//creating object for latest customer reviews
    Latest_Customer_Reviews_Average_Column: {
        heading: 'Latest customer reviews',
        sub_heading: 'of Beauty Service Professionals in New Delhi',
        rating: '4.8',
        number_of_reviews: 'based on 789,789 reviews',
        view_more_comment: 'https://www.urbancompany.com/customer_reviews/delhi-ncr-salon-at-home'
    }
,










   

  //creating questions list for service page 

  Question_And_Answer: [
      
    {
       question: 'What are the different spa treatemnt for women you have ?',
        
    },


    {
       question: 'What are the add ons I can opt for if i book a spa for women at home?',
            
    },
       
    {
       question: 'How regularly should I get a spa for women treatment done?',
            
    },

    {
        question: 'Will there be a female or a male therapist?'

    },

    {
        question: 'Should I tell anyone about the allergies or medical conditions I have?',
    },
     
    {
        question: 'What should I do before a spa treatment?',
    },

    {
        question: 'Do I need to take  a bath after the spa at home treatment ?',
    },

    {
        question: "Can I use my cell phone during a spa at home treatment?",
       
    },

    {
        question: 'What should I wear for the spa for women?',
    }, 

    {
        question: 'Should I avoid spa for women at home If I am pregnant ?',
    },

    {
        question: 'I just got waxing done. Can I book a spa at home the same day ?',
    },

    {
        question: 'Can I gift a spa to a friend?',
    },

    {
        question: 'What is the minimum amount I can book for a spa for women at home service?',
    },

    {
        question: 'Will the therapist clean my house after a spa at home treatment?',
    },

    {
       question: 'What they actually do in spa service?',
    },
    {
        question: 'How to rate spa treatment?',
    }
]
,






    
    




    //creating state object for most asked questions and answer

   Modal_Question_And_Answer: {
      
       First_Element_Of_Question_Modal : {
           question: 'What are the different spa treatemnt for women you have ?',
             answer: 'Urban Company offers a lot of options that specifically cater to your needs. Here are some spa treatments that we offer' +
             'Aromatherapy Massage- The pressure intensity is low and it specifically helps in relaxing the body and calming the mind' +
             'Swedish Massage- The pressure intensity is medium and it helps in muscle relaxation and stress relaxation' + 
             'Thai Massage- - The pressure intensity is high and it helps boosting your energy, improves flexibility and relaxation of muscles' +
             'Deep Tissue Massage- The pressure intensity is high. It is great of pain relieving and easing chronic muscle tensions' + 
             'Body Scrub Massage- The pressure intensity is low and it helps in getting a youthful, vibrant and hydrated skin.'
        },


       Second_Element_Of_Question_Modal: {
                  question: 'What are the add ons I can opt for if i book a spa for women at home?',
                  answer: 'Apart from the spa treatments, Urban Company offers you a host of add ons that you can book. Whether it is a part of a package you choose (and save money) or alacarte:' +
                  'Face massage- A 20 minute face massage with low to medium intensity will leave your face glowing with improved blood circulation' +
                  'Head &amp; shoulder massage- A 20 minute massage with medium intensity will relieve you of headaches and any upper body tension' +
                  'Foot reflexology- A 20 minute massage with low intensity relieves stress and treats imbalances of organs connected to the feet' +
                  'Hand reflexology- A 20 minute massage with high intensity relieves stress and treats imbalances of organs connected to the hands'
        },
           
        Third_Element_Of_Question_Modal: {
                 question: 'How regularly should I get a spa for women treatment done?',
                 answer: 'The regularity of your spa treatments depends on many factors such as physical, emotional stress along with your budget.' + 
                 'You will feel the benefits after getting the treatment regularly. A spa once in a year or once in a while doesn’t really help.' +
                 ' Get a monthly massage to stay stress free and reap the many benefits that a spa offers.' +
                 'With the Urban Company wellness membership, you can get attractive discounts on your spa treatments!'
        },

        Fourth_Element_Of_Question_Modal: {
            question: 'Will there be a female or a male therapist?',
            answer: 'We only have trained and experienced female therapists.' +
             'Also as of now, we only offer spa treatments for women.'

        },

        Fifth_Element_Of_Question_Modal: {
                 question: 'Should I tell anyone about the allergies or medical conditions I have?',
                 answer: 'Yes. We recommend you inform the service professional about the same before you confirm the appointment. However, there no difference in charges and you will be charged as per our price points.'
        },
         
        Sixth_Element_Of_Question_Modal :{
            question: 'What should I do before a spa treatment?',
            answer: 'Yes. If you communicate with a therapist, the expert will be able to advice you better on the treatment and the pressure you should pick for the spa treatment.'
        },

        Seventh_Element_Of_Question_Modal: {
            question: 'Do I need to take  a bath after the spa at home treatment ?',
            answer: 'A spa treatment is designed to relax you. Here are some things you can do that can help you get the maximum out of a treatment at home:' +
            'Go low on caffeine' +
            'Try not to have a heavy meal before a spa treatment' +
            'Stretch a bit and get comfortable' +
            'Communicate with your therapist and let them know if the pressure is right'
        },

        Eighth_Element_Of_Question_Modal: {
            question: "Can I use my cell phone during a spa at home treatment?",
            answer: 'You certainly can, but we advise you do not. Getting a spa is' +
            ' to relax your senses and a cellphone will always keep you preoccupied.' + 
            'It is good to keep it aside while you are getting a therapeutic session done.'
        },

        Nineth_Element_Of_Question_Modal: {
            question: 'What should I wear for the spa for women?',
            answer: 'You do not have to worry about what to wear during a session. Our experts get every possible equipment needed for a relaxing spa, including what you can wear. The wearable gown is exclusively made available for clients and is not reused.'
        }, 

        Tenth_Element_Of_Question_Modal :{
            question: 'Should I avoid spa for women at home If I am pregnant ?',
            answer: 'If you are in your first trimester, it is advisable to not get a spa. Towards the later part of your pregnancy a spa can actually help. We advise consulting the therapist on what treatment would best work for you.'
        },

        Eleventh_Element_Of_Question_Modal :{
            question: 'I just got waxing done. Can I book a spa at home the same day ?' ,
            answer: 'Your hair follicles open up after you get waxing done. It is best to' +
             'avoid contact with excess moisture right after getting waxing done. Also if you have a sensitive skin, it may cause redness (and swelling) post waxing. Wait at east 24 hours to get a massage done.'
        },

        Twelth_Element_Of_Question_Modal: {
            question: 'Can I gift a spa to a friend?',
            answer: 'With Urban Company’s “Gift a Spa” service, you can book a spa for a friend or a loved one and gift them a day of pampering. Just log on to the app to find the service.'
        },

        Thirteenth_Element_Of_Question_Modal: {
            question: 'What is the minimum amount I can book for a spa for women at home service?',
            answer: 'The minimum booking amount for a spa at home service is Rs.999.'
        },

         Fourteenth_Element_Of_Question_Modal: {
            question: 'Will the therapist clean my house after a spa at home treatment?',
            answer: 'You can sit back and relax, for the therapist will clean up after every spa appointment and leave your home exactly the way it was.'
        },

        Fifteenth_Element_Of_Question_Modal: {
           question: 'What they actually do in spa service?',
           answer: 'Give you the time of your life.'
        },
        Sixteenth_Element_Of_Question_Modal:  {
            question: 'How to rate spa treatment?',
            answer: 'Our salon professionals use the best equipment which is sterile before use. They also ensure minimal dirt and clean up after they have worked their magic. Your home is definitely a safer and a cleaner place than any salon near your home (or anywhere for that matter).'
        }
   }



}



















































































//creating state for Appliance repair service page
export const ApplianceRepair = {
    Main_Photo: 'https://cdn.pixabay.com/photo/2017/03/07/20/45/cog-wheels-2125169__340.jpg',
    Main_Heading: 'Appliances Repair in Delhi',
    Sub_Heading_List : {
        First_Element : 'Best Service For Appliances ',
        Second_Element : '1 Year past gaurantee',
        Third_Element : 'Best Tools and safety measures for total protection' 
    },
   Packages_Box: {
       Heading: 'View All Men Services',
       Fields: {
           First_Field: 'Exclusive Packages',
           Second_Field: 'Washing Machine Repair',
           Third_Field: 'Ac repair',
           Fourth_Field: 'Gyser repair',
       },
       Images : {
         First_Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/categories/category_v2/category_e1f8fd10.png',
         Second_Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2Theon7bcxjPHdJ_OFI9Ur73cVwAnBQ2Ew&usqp=CAU",
         Third_Image: "data:image/jpeg;base64,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",
         Fourth_Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0IakeIGMkGN0N6fxUNF6PgyRE3aquf4DpA&usqp=CAU"
       },

   },
   Services_Navbar: {
         First_Link: 'How it work',
         Second_Link: 'Machanic',
         Third_Link: 'Blogs',
         Fourth_Link: 'FAQs',
         Fifth_Link: ' About Machanic '
   },

   How_it_Work_Column: {
     heading: 'How it Works',
     How_It_Work_First_Element: {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg',
           Text: 'Choose a Salon service',
           Sub_Text: 'Select from various salon packages & services',
       },
       How_It_Work_Second_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_899773a0.png',
        Text: 'Choose your time-slot',
        Sub_Text: 'We service from 9am-7pm',
    },
        How_It_Work_Third_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_89c4ec40.png',
        Text: 'Relax and enjoy salon service',
        Sub_Text: 'Our Professionals will get in touch with you an hour before the Services'
    }
   },
   Professionals_Rating_Column: {
       headings : 'Machanics',
       Professionals_Cards_List : [
           {
               Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56b45626b637639e7eed43de/1521523493831-2ca9d8a1484b64ac8d045eb7818d27c6.jpeg',
               Name: 'Tripti Rana',
               Address: 'CR Park, New Delhi, Delhi, India',
               Commenter_Name_Alphabate: 'S',
               Commenter_Name: 'Shweta',
               Rating: '5.0',
               Comment: 'I want to give her all the compliments, Punctual, hygenic, polite, patient, well groomed, expert service and eye to details ',
               Extra_Comments: {

                    Commenter_Name_Alphabate: 'N',
                    Commenter_Name: 'Nitish',
                    Comment: 'She did a good job overall. My wife was very heppy with service'    
               },
               
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58ae9421d451ceb649f43089/1609232457477-293a6e.jpeg',   
            Name: 'Deepika Gupta',
            Address: 'Nihal Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'K',
            Commenter_Name: 'Kanika',
            Rating: '5.0',
            Comment: 'Best beauticians I have ever found perfect in her work super polite and very experienced',
            Extra_Comments:  {

                     Commenter_Name_Alphabate: 'A',
                     Commenter_Name: 'Anita',
                     Comment: 'Deepika Was hygenic, well groomed and she was really particular in giving a eye to each detail'    
                },
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56e913631a6caa5d3bd63392/1529904572825-48ffbd8125b5cfa09404db7446d74fe6.jpeg',   
            Name: 'Pooja Kumari',
            Address: 'Neb sarai, Block J, Saket, New Delhi, Delhi, India',
            Commenter_Name_Alphabate: 'D',
            Commenter_Name: 'Divyanshi',
            Rating: '5.0',
            Comment: 'Very friendly, understanding and knowledgeable service. Loved it',
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'P',
                    Commenter_Name: 'Preksha',
                    Comment: 'Pooja did an excellent job.. loved her service'
                }
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5a82b5c602614b5f007781aa/1536661908268-fae31dcd7c9cdb624c4e6a8d5e775b12.jpeg',   
            Name: 'Soni Srivastava',
            Address: 'Dwarka, Delhi, India',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/584fa25dd3269aee2c5c681b/1517894439202-74cb860b6ca0d57e8b1f36f4083e9089.png',   
            Name: 'Sandhya Sharma',
            Address: '3rd floor, JP House, Plot No. 172 Lane No. 2, Westend MArg ',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/568fb00f4e81d99c35b4bd51/1538118244891-6091599123fddd241b02b11366b95bf8.jpeg',   
            Name: 'Pooja Chauhan',
            Address: 'Budh Vihar Phase I, Budh Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'R',
            Commenter_Name: 'Revanshi',
            Rating: '5.0',
            Comment: 'I want ms.Pooja Chauhan again as my service expert next time too. Great service.' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58b5331e455dc84937b40ce0/1530073428870-b75256f2246d56c432c21ed9d14e044d.jpeg',   
            Name: 'Sanju Suryavanshi',
            Address: 'Naraina Village, Naraina, Delhi, India',
            Commenter_Name_Alphabate: 'A',
            Commenter_Name: 'Avni',
            Rating: '5.0',
            Comment: 'She was really superb at her work... PainLess Wax..' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
        
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5b879900519a69220036eb13/1535691152402-f6eb392710af7e289b36d08a44a84b6a.jpeg',   
            Name: 'Alka kapoor',
            Address: 'Sant Nagar, Burari, Delhi, India',
            Commenter_Name_Alphabate: 'H',
            Commenter_Name: 'Harpreet',
            Rating: '5.0',
            Comment: 'Good work and patient technician m. But Alka kapoor didn,t provide wax enough for a plus size person, also the aporn for waxing was very small. ' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'S',
                    Commenter_Name: 'Sudha',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        }
       ]

   },







//creating also lookes and  images carasou
Also_Looked_At_Services : {
    heading: 'People also lookes At',
    link_items_list: [
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bc824070.jpeg',
            text_lable: 'Massage Therapists At Home For Women',
            link:'',
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_3c671dc0.jpeg',
            text_lable: 'Microwave Repair Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a91b73d0.jpeg',
            text_lable: 'Electricians',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg',
            text_lable: 'Home Cleaning Service Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_f5a01e90.jpeg',
            text_lable: 'Disinfection Service',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_8d9f2900.png',
            text_lable: 'Beauty Service Professionals',
            link: ''
        }
    ]
},
 













   //creating services text names for services near me

   Related_Services_Column: {
     heading: 'Popular Services Near You',
     links:   [
       {link: 'Electricians'},
       {link: 'Microwave Repair'},
       {link: 'Cleaning Services'},
       {link: 'Salons'},
       {link:'Spa'}
    ],

   },


   
   Related_Services_Blogs_heading : {
       heading:'Popular Blog posts on Beauty'
   },

   Related_Services_Blogs_Carasoul : [
       {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/14180910/multani-mitti-face-mask-.jpg',
        textlable: 'Multani Mitti Packs: Everything About the Magic Mud',
        link: 'https://blog.urbancompany.com/beauty/multani-mitti-face-packs/'
        },

        {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/30163947/rose-water-for-dry-skin.jpg',
        textlable: 'Miracles Happen When You Use Rose Water for Dry Skin!',
        link: 'https://blog.urbancompany.com/beauty/rose-water-for-dry-skin/'},

        {
             image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/21190929/Rose-Water-for-Hair.jpg',
             textlable: '5 Reasons Why You Should Use Rose Water for Hair',
             link:'https://blog.urbancompany.com/beauty/rose-water-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/18153055/Threading-Do-and-Dont.jpg',
            textlable: 'What to Do (and Not Do) After a Salon Visit',
            link:'https://blog.urbancompany.com/beauty/dos-donts-salon-visit/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/11145102/rose-water-for-skin-feature-image.jpg',
            textlable: 'Best Ways to Use Rose Water for Skin',
            link: 'https://blog.urbancompany.com/beauty/rose-water-for-skin/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/12/25174046/apple-cider-hero1.png',
            textlable: 'Apple Cider Vinegar for Hair: Why Use It and How (Part 2)',
            link: 'https://blog.urbancompany.com/beauty/apple-cider-vinegar-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/06134012/lavender-1.png',
            textlable: 'How to Use Lavender Oil for Hair Growth & More',
            link: 'https://blog.urbancompany.com/beauty/lavender-oil-for-hair-growth/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25182257/new.jpg',
            textlable: 'Cocoa Butter Uses for Skin and Hair (DIY Recipes Included!)',
            link: 'https://blog.urbancompany.com/beauty/cocoa-butter-uses/'
        }
   ],








//creating object for latest customer reviews
    Latest_Customer_Reviews_Average_Column: {
        heading: 'Latest customer reviews',
        sub_heading: 'of Beauty Service Professionals in New Delhi',
        rating: '4.8',
        number_of_reviews: 'based on 789,789 reviews',
        view_more_comment: 'https://www.urbancompany.com/customer_reviews/delhi-ncr-salon-at-home'
    }
,










   

  //creating questions list for service page 

  Question_And_Answer: [
      
    {
       question: 'What are the different spa treatemnt for women you have ?',
        
    },


    {
       question: 'What are the add ons I can opt for if i book a spa for women at home?',
            
    },
       
    {
       question: 'How regularly should I get a spa for women treatment done?',
            
    },

    {
        question: 'Will there be a female or a male therapist?'

    },

    {
        question: 'Should I tell anyone about the allergies or medical conditions I have?',
    },
     
    {
        question: 'What should I do before a spa treatment?',
    },

    {
        question: 'Do I need to take  a bath after the spa at home treatment ?',
    },

    {
        question: "Can I use my cell phone during a spa at home treatment?",
       
    },

    {
        question: 'What should I wear for the spa for women?',
    }, 

    {
        question: 'Should I avoid spa for women at home If I am pregnant ?',
    },

    {
        question: 'I just got waxing done. Can I book a spa at home the same day ?',
    },

    {
        question: 'Can I gift a spa to a friend?',
    },

    {
        question: 'What is the minimum amount I can book for a spa for women at home service?',
    },

    {
        question: 'Will the therapist clean my house after a spa at home treatment?',
    },

    {
       question: 'What they actually do in spa service?',
    },
    {
        question: 'How to rate spa treatment?',
    }
]
,






    
    




    //creating state object for most asked questions and answer

   Modal_Question_And_Answer: {
      
       First_Element_Of_Question_Modal : {
           question: 'What are the different spa treatemnt for women you have ?',
             answer: 'Urban Company offers a lot of options that specifically cater to your needs. Here are some spa treatments that we offer' +
             'Aromatherapy Massage- The pressure intensity is low and it specifically helps in relaxing the body and calming the mind' +
             'Swedish Massage- The pressure intensity is medium and it helps in muscle relaxation and stress relaxation' + 
             'Thai Massage- - The pressure intensity is high and it helps boosting your energy, improves flexibility and relaxation of muscles' +
             'Deep Tissue Massage- The pressure intensity is high. It is great of pain relieving and easing chronic muscle tensions' + 
             'Body Scrub Massage- The pressure intensity is low and it helps in getting a youthful, vibrant and hydrated skin.'
        },


       Second_Element_Of_Question_Modal: {
                  question: 'What are the add ons I can opt for if i book a spa for women at home?',
                  answer: 'Apart from the spa treatments, Urban Company offers you a host of add ons that you can book. Whether it is a part of a package you choose (and save money) or alacarte:' +
                  'Face massage- A 20 minute face massage with low to medium intensity will leave your face glowing with improved blood circulation' +
                  'Head &amp; shoulder massage- A 20 minute massage with medium intensity will relieve you of headaches and any upper body tension' +
                  'Foot reflexology- A 20 minute massage with low intensity relieves stress and treats imbalances of organs connected to the feet' +
                  'Hand reflexology- A 20 minute massage with high intensity relieves stress and treats imbalances of organs connected to the hands'
        },
           
        Third_Element_Of_Question_Modal: {
                 question: 'How regularly should I get a spa for women treatment done?',
                 answer: 'The regularity of your spa treatments depends on many factors such as physical, emotional stress along with your budget.' + 
                 'You will feel the benefits after getting the treatment regularly. A spa once in a year or once in a while doesn’t really help.' +
                 ' Get a monthly massage to stay stress free and reap the many benefits that a spa offers.' +
                 'With the Urban Company wellness membership, you can get attractive discounts on your spa treatments!'
        },

        Fourth_Element_Of_Question_Modal: {
            question: 'Will there be a female or a male therapist?',
            answer: 'We only have trained and experienced female therapists.' +
             'Also as of now, we only offer spa treatments for women.'

        },

        Fifth_Element_Of_Question_Modal: {
                 question: 'Should I tell anyone about the allergies or medical conditions I have?',
                 answer: 'Yes. We recommend you inform the service professional about the same before you confirm the appointment. However, there no difference in charges and you will be charged as per our price points.'
        },
         
        Sixth_Element_Of_Question_Modal :{
            question: 'What should I do before a spa treatment?',
            answer: 'Yes. If you communicate with a therapist, the expert will be able to advice you better on the treatment and the pressure you should pick for the spa treatment.'
        },

        Seventh_Element_Of_Question_Modal: {
            question: 'Do I need to take  a bath after the spa at home treatment ?',
            answer: 'A spa treatment is designed to relax you. Here are some things you can do that can help you get the maximum out of a treatment at home:' +
            'Go low on caffeine' +
            'Try not to have a heavy meal before a spa treatment' +
            'Stretch a bit and get comfortable' +
            'Communicate with your therapist and let them know if the pressure is right'
        },

        Eighth_Element_Of_Question_Modal: {
            question: "Can I use my cell phone during a spa at home treatment?",
            answer: 'You certainly can, but we advise you do not. Getting a spa is' +
            ' to relax your senses and a cellphone will always keep you preoccupied.' + 
            'It is good to keep it aside while you are getting a therapeutic session done.'
        },

        Nineth_Element_Of_Question_Modal: {
            question: 'What should I wear for the spa for women?',
            answer: 'You do not have to worry about what to wear during a session. Our experts get every possible equipment needed for a relaxing spa, including what you can wear. The wearable gown is exclusively made available for clients and is not reused.'
        }, 

        Tenth_Element_Of_Question_Modal :{
            question: 'Should I avoid spa for women at home If I am pregnant ?',
            answer: 'If you are in your first trimester, it is advisable to not get a spa. Towards the later part of your pregnancy a spa can actually help. We advise consulting the therapist on what treatment would best work for you.'
        },

        Eleventh_Element_Of_Question_Modal :{
            question: 'I just got waxing done. Can I book a spa at home the same day ?' ,
            answer: 'Your hair follicles open up after you get waxing done. It is best to' +
             'avoid contact with excess moisture right after getting waxing done. Also if you have a sensitive skin, it may cause redness (and swelling) post waxing. Wait at east 24 hours to get a massage done.'
        },

        Twelth_Element_Of_Question_Modal: {
            question: 'Can I gift a spa to a friend?',
            answer: 'With Urban Company’s “Gift a Spa” service, you can book a spa for a friend or a loved one and gift them a day of pampering. Just log on to the app to find the service.'
        },

        Thirteenth_Element_Of_Question_Modal: {
            question: 'What is the minimum amount I can book for a spa for women at home service?',
            answer: 'The minimum booking amount for a spa at home service is Rs.999.'
        },

         Fourteenth_Element_Of_Question_Modal: {
            question: 'Will the therapist clean my house after a spa at home treatment?',
            answer: 'You can sit back and relax, for the therapist will clean up after every spa appointment and leave your home exactly the way it was.'
        },

        Fifteenth_Element_Of_Question_Modal: {
           question: 'What they actually do in spa service?',
           answer: 'Give you the time of your life.'
        },
        Sixteenth_Element_Of_Question_Modal:  {
            question: 'How to rate spa treatment?',
            answer: 'Our salon professionals use the best equipment which is sterile before use. They also ensure minimal dirt and clean up after they have worked their magic. Your home is definitely a safer and a cleaner place than any salon near your home (or anywhere for that matter).'
        }
   }



}

















































//creating state for service page Ac repair service
 export const AcRepair = {
    Main_Photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVItvHkzmKf3NgyHJuSKID479hwGiQm-PsMA&usqp=CAU', 
    Main_Heading: 'Best AcRepair in Delhi',
    Sub_Heading_List : {
        First_Element : 'Best Ac services in city',
        Second_Element : 'Full cautions for safety',
        Third_Element : '100% garuantee work' 
    },
   Packages_Box: {
       Heading: 'View All Men Services',
       Fields: {
           First_Field: 'Exclusive Packages',
           Second_Field: 'Ac services ',
           Third_Field: 'Ac setUp',
           Fourth_Field: 'Ac Anything',
       },
       Images : {
         First_Image: 'data:image/jpeg;base64,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',
         Second_Image: "data:image/jpeg;base64,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",
         Third_Image: "data:image/jpeg;base64,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",
         Fourth_Image: "data:image/jpeg;base64,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"
       },

   },
   Services_Navbar: {
         First_Link: 'How it work',
         Second_Link: 'Beauticians',
         Third_Link: 'Blogs',
         Fourth_Link: 'FAQs',
         Fifth_Link: 'About salon at Home for Men'
   },

   How_it_Work_Column: {
     heading: 'How it Works',
     How_It_Work_First_Element: {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg',
           Text: 'Choose a Salon service',
           Sub_Text: 'Select from various salon packages & services',
       },
       How_It_Work_Second_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_899773a0.png',
        Text: 'Choose your time-slot',
        Sub_Text: 'We service from 9am-7pm',
    },
        How_It_Work_Third_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_89c4ec40.png',
        Text: 'Relax and enjoy salon service',
        Sub_Text: 'Our Professionals will get in touch with you an hour before the Services'
    }
   },
   Professionals_Rating_Column: {
       headings : 'Beauticians',
       Professionals_Cards_List : [
           {
               Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56b45626b637639e7eed43de/1521523493831-2ca9d8a1484b64ac8d045eb7818d27c6.jpeg',
               Name: 'Tripti Rana',
               Address: 'CR Park, New Delhi, Delhi, India',
               Commenter_Name_Alphabate: 'S',
               Commenter_Name: 'Shweta',
               Rating: '5.0',
               Comment: 'I want to give her all the compliments, Punctual, hygenic, polite, patient, well groomed, expert service and eye to details ',
               Extra_Comments: {

                    Commenter_Name_Alphabate: 'N',
                    Commenter_Name: 'Nitish',
                    Comment: 'She did a good job overall. My wife was very heppy with service'    
               },
               
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58ae9421d451ceb649f43089/1609232457477-293a6e.jpeg',   
            Name: 'Deepika Gupta',
            Address: 'Nihal Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'K',
            Commenter_Name: 'Kanika',
            Rating: '5.0',
            Comment: 'Best beauticians I have ever found perfect in her work super polite and very experienced',
            Extra_Comments:  {

                     Commenter_Name_Alphabate: 'A',
                     Commenter_Name: 'Anita',
                     Comment: 'Deepika Was hygenic, well groomed and she was really particular in giving a eye to each detail'    
                },
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56e913631a6caa5d3bd63392/1529904572825-48ffbd8125b5cfa09404db7446d74fe6.jpeg',   
            Name: 'Pooja Kumari',
            Address: 'Neb sarai, Block J, Saket, New Delhi, Delhi, India',
            Commenter_Name_Alphabate: 'D',
            Commenter_Name: 'Divyanshi',
            Rating: '5.0',
            Comment: 'Very friendly, understanding and knowledgeable service. Loved it',
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'P',
                    Commenter_Name: 'Preksha',
                    Comment: 'Pooja did an excellent job.. loved her service'
                }
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5a82b5c602614b5f007781aa/1536661908268-fae31dcd7c9cdb624c4e6a8d5e775b12.jpeg',   
            Name: 'Soni Srivastava',
            Address: 'Dwarka, Delhi, India',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/584fa25dd3269aee2c5c681b/1517894439202-74cb860b6ca0d57e8b1f36f4083e9089.png',   
            Name: 'Sandhya Sharma',
            Address: '3rd floor, JP House, Plot No. 172 Lane No. 2, Westend MArg ',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/568fb00f4e81d99c35b4bd51/1538118244891-6091599123fddd241b02b11366b95bf8.jpeg',   
            Name: 'Pooja Chauhan',
            Address: 'Budh Vihar Phase I, Budh Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'R',
            Commenter_Name: 'Revanshi',
            Rating: '5.0',
            Comment: 'I want ms.Pooja Chauhan again as my service expert next time too. Great service.' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58b5331e455dc84937b40ce0/1530073428870-b75256f2246d56c432c21ed9d14e044d.jpeg',   
            Name: 'Sanju Suryavanshi',
            Address: 'Naraina Village, Naraina, Delhi, India',
            Commenter_Name_Alphabate: 'A',
            Commenter_Name: 'Avni',
            Rating: '5.0',
            Comment: 'She was really superb at her work... PainLess Wax..' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
        
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5b879900519a69220036eb13/1535691152402-f6eb392710af7e289b36d08a44a84b6a.jpeg',   
            Name: 'Alka kapoor',
            Address: 'Sant Nagar, Burari, Delhi, India',
            Commenter_Name_Alphabate: 'H',
            Commenter_Name: 'Harpreet',
            Rating: '5.0',
            Comment: 'Good work and patient technician m. But Alka kapoor didn,t provide wax enough for a plus size person, also the aporn for waxing was very small. ' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'S',
                    Commenter_Name: 'Sudha',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        }
       ]

   },







//creating also lookes and  images carasou
Also_Looked_At_Services : {
    heading: 'People also lookes At',
    link_items_list: [
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bc824070.jpeg',
            text_lable: 'Massage Therapists At Home For Women',
            link:'',
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_3c671dc0.jpeg',
            text_lable: 'Microwave Repair Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a91b73d0.jpeg',
            text_lable: 'Electricians',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg',
            text_lable: 'Home Cleaning Service Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_f5a01e90.jpeg',
            text_lable: 'Disinfection Service',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_8d9f2900.png',
            text_lable: 'Beauty Service Professionals',
            link: ''
        }
    ]
},
 













   //creating services text names for services near me

   Related_Services_Column: {
     heading: 'Popular Services Near You',
     links:   [
       {link: 'Electricians'},
       {link: 'Microwave Repair'},
       {link: 'Cleaning Services'},
       {link: 'Salons'},
       {link:'Spa'}
    ],

   },


   
   Related_Services_Blogs_heading : {
       heading:'Popular Blog posts on Beauty'
   },

   Related_Services_Blogs_Carasoul : [
       {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/14180910/multani-mitti-face-mask-.jpg',
        textlable: 'Multani Mitti Packs: Everything About the Magic Mud',
        link: 'https://blog.urbancompany.com/beauty/multani-mitti-face-packs/'
        },

        {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/30163947/rose-water-for-dry-skin.jpg',
        textlable: 'Miracles Happen When You Use Rose Water for Dry Skin!',
        link: 'https://blog.urbancompany.com/beauty/rose-water-for-dry-skin/'},

        {
             image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/21190929/Rose-Water-for-Hair.jpg',
             textlable: '5 Reasons Why You Should Use Rose Water for Hair',
             link:'https://blog.urbancompany.com/beauty/rose-water-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/18153055/Threading-Do-and-Dont.jpg',
            textlable: 'What to Do (and Not Do) After a Salon Visit',
            link:'https://blog.urbancompany.com/beauty/dos-donts-salon-visit/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/11145102/rose-water-for-skin-feature-image.jpg',
            textlable: 'Best Ways to Use Rose Water for Skin',
            link: 'https://blog.urbancompany.com/beauty/rose-water-for-skin/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/12/25174046/apple-cider-hero1.png',
            textlable: 'Apple Cider Vinegar for Hair: Why Use It and How (Part 2)',
            link: 'https://blog.urbancompany.com/beauty/apple-cider-vinegar-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/06134012/lavender-1.png',
            textlable: 'How to Use Lavender Oil for Hair Growth & More',
            link: 'https://blog.urbancompany.com/beauty/lavender-oil-for-hair-growth/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25182257/new.jpg',
            textlable: 'Cocoa Butter Uses for Skin and Hair (DIY Recipes Included!)',
            link: 'https://blog.urbancompany.com/beauty/cocoa-butter-uses/'
        }
   ],








//creating object for latest customer reviews
    Latest_Customer_Reviews_Average_Column: {
        heading: 'Latest customer reviews',
        sub_heading: 'of Beauty Service Professionals in New Delhi',
        rating: '4.8',
        number_of_reviews: 'based on 789,789 reviews',
        view_more_comment: 'https://www.urbancompany.com/customer_reviews/delhi-ncr-salon-at-home'
    }
,










   

  //creating questions list for service page 

  Question_And_Answer: [
      
    {
       question: 'What are the different spa treatemnt for women you have ?',
        
    },


    {
       question: 'What are the add ons I can opt for if i book a spa for women at home?',
            
    },
       
    {
       question: 'How regularly should I get a spa for women treatment done?',
            
    },

    {
        question: 'Will there be a female or a male therapist?'

    },

    {
        question: 'Should I tell anyone about the allergies or medical conditions I have?',
    },
     
    {
        question: 'What should I do before a spa treatment?',
    },

    {
        question: 'Do I need to take  a bath after the spa at home treatment ?',
    },

    {
        question: "Can I use my cell phone during a spa at home treatment?",
       
    },

    {
        question: 'What should I wear for the spa for women?',
    }, 

    {
        question: 'Should I avoid spa for women at home If I am pregnant ?',
    },

    {
        question: 'I just got waxing done. Can I book a spa at home the same day ?',
    },

    {
        question: 'Can I gift a spa to a friend?',
    },

    {
        question: 'What is the minimum amount I can book for a spa for women at home service?',
    },

    {
        question: 'Will the therapist clean my house after a spa at home treatment?',
    },

    {
       question: 'What they actually do in spa service?',
    },
    {
        question: 'How to rate spa treatment?',
    }
]
,






    
    




    //creating state object for most asked questions and answer

   Modal_Question_And_Answer: {
      
       First_Element_Of_Question_Modal : {
           question: 'What are the different spa treatemnt for women you have ?',
             answer: 'Urban Company offers a lot of options that specifically cater to your needs. Here are some spa treatments that we offer' +
             'Aromatherapy Massage- The pressure intensity is low and it specifically helps in relaxing the body and calming the mind' +
             'Swedish Massage- The pressure intensity is medium and it helps in muscle relaxation and stress relaxation' + 
             'Thai Massage- - The pressure intensity is high and it helps boosting your energy, improves flexibility and relaxation of muscles' +
             'Deep Tissue Massage- The pressure intensity is high. It is great of pain relieving and easing chronic muscle tensions' + 
             'Body Scrub Massage- The pressure intensity is low and it helps in getting a youthful, vibrant and hydrated skin.'
        },


       Second_Element_Of_Question_Modal: {
                  question: 'What are the add ons I can opt for if i book a spa for women at home?',
                  answer: 'Apart from the spa treatments, Urban Company offers you a host of add ons that you can book. Whether it is a part of a package you choose (and save money) or alacarte:' +
                  'Face massage- A 20 minute face massage with low to medium intensity will leave your face glowing with improved blood circulation' +
                  'Head &amp; shoulder massage- A 20 minute massage with medium intensity will relieve you of headaches and any upper body tension' +
                  'Foot reflexology- A 20 minute massage with low intensity relieves stress and treats imbalances of organs connected to the feet' +
                  'Hand reflexology- A 20 minute massage with high intensity relieves stress and treats imbalances of organs connected to the hands'
        },
           
        Third_Element_Of_Question_Modal: {
                 question: 'How regularly should I get a spa for women treatment done?',
                 answer: 'The regularity of your spa treatments depends on many factors such as physical, emotional stress along with your budget.' + 
                 'You will feel the benefits after getting the treatment regularly. A spa once in a year or once in a while doesn’t really help.' +
                 ' Get a monthly massage to stay stress free and reap the many benefits that a spa offers.' +
                 'With the Urban Company wellness membership, you can get attractive discounts on your spa treatments!'
        },

        Fourth_Element_Of_Question_Modal: {
            question: 'Will there be a female or a male therapist?',
            answer: 'We only have trained and experienced female therapists.' +
             'Also as of now, we only offer spa treatments for women.'

        },

        Fifth_Element_Of_Question_Modal: {
                 question: 'Should I tell anyone about the allergies or medical conditions I have?',
                 answer: 'Yes. We recommend you inform the service professional about the same before you confirm the appointment. However, there no difference in charges and you will be charged as per our price points.'
        },
         
        Sixth_Element_Of_Question_Modal :{
            question: 'What should I do before a spa treatment?',
            answer: 'Yes. If you communicate with a therapist, the expert will be able to advice you better on the treatment and the pressure you should pick for the spa treatment.'
        },

        Seventh_Element_Of_Question_Modal: {
            question: 'Do I need to take  a bath after the spa at home treatment ?',
            answer: 'A spa treatment is designed to relax you. Here are some things you can do that can help you get the maximum out of a treatment at home:' +
            'Go low on caffeine' +
            'Try not to have a heavy meal before a spa treatment' +
            'Stretch a bit and get comfortable' +
            'Communicate with your therapist and let them know if the pressure is right'
        },

        Eighth_Element_Of_Question_Modal: {
            question: "Can I use my cell phone during a spa at home treatment?",
            answer: 'You certainly can, but we advise you do not. Getting a spa is' +
            ' to relax your senses and a cellphone will always keep you preoccupied.' + 
            'It is good to keep it aside while you are getting a therapeutic session done.'
        },

        Nineth_Element_Of_Question_Modal: {
            question: 'What should I wear for the spa for women?',
            answer: 'You do not have to worry about what to wear during a session. Our experts get every possible equipment needed for a relaxing spa, including what you can wear. The wearable gown is exclusively made available for clients and is not reused.'
        }, 

        Tenth_Element_Of_Question_Modal :{
            question: 'Should I avoid spa for women at home If I am pregnant ?',
            answer: 'If you are in your first trimester, it is advisable to not get a spa. Towards the later part of your pregnancy a spa can actually help. We advise consulting the therapist on what treatment would best work for you.'
        },

        Eleventh_Element_Of_Question_Modal :{
            question: 'I just got waxing done. Can I book a spa at home the same day ?' ,
            answer: 'Your hair follicles open up after you get waxing done. It is best to' +
             'avoid contact with excess moisture right after getting waxing done. Also if you have a sensitive skin, it may cause redness (and swelling) post waxing. Wait at east 24 hours to get a massage done.'
        },

        Twelth_Element_Of_Question_Modal: {
            question: 'Can I gift a spa to a friend?',
            answer: 'With Urban Company’s “Gift a Spa” service, you can book a spa for a friend or a loved one and gift them a day of pampering. Just log on to the app to find the service.'
        },

        Thirteenth_Element_Of_Question_Modal: {
            question: 'What is the minimum amount I can book for a spa for women at home service?',
            answer: 'The minimum booking amount for a spa at home service is Rs.999.'
        },

         Fourteenth_Element_Of_Question_Modal: {
            question: 'Will the therapist clean my house after a spa at home treatment?',
            answer: 'You can sit back and relax, for the therapist will clean up after every spa appointment and leave your home exactly the way it was.'
        },

        Fifteenth_Element_Of_Question_Modal: {
           question: 'What they actually do in spa service?',
           answer: 'Give you the time of your life.'
        },
        Sixteenth_Element_Of_Question_Modal:  {
            question: 'How to rate spa treatment?',
            answer: 'Our salon professionals use the best equipment which is sterile before use. They also ensure minimal dirt and clean up after they have worked their magic. Your home is definitely a safer and a cleaner place than any salon near your home (or anywhere for that matter).'
        }
   }



}



















































































































//creating state object for Pest Control service page

export const PestControl = {
    Main_Photo: 'https://cdn.optimoroute.com/wp-content/uploads/2020/07/Pest-Control-Hero-LP.png',
    Main_Heading: 'Best PestControl Service  in Delhi',
    Sub_Heading_List : {
        First_Element : 'Best Pest Control Service in City',
        Second_Element : 'Use Breathing Safe Chemicals to Clean',
        Third_Element : 'Giving 1 Year Gaurantee after service' 
    },
   Packages_Box: {
       Heading: 'View All Men Services',
       Fields: {
           First_Field: 'Exclusive Packages',
           Second_Field: 'Kitchen Cleaning',
           Third_Field: 'Bathroom Cleaning',
           Fourth_Field: 'House Corners',
       },
       Images : {
         First_Image: 'data:image/png;base64,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',
         Second_Image: "data:image/jpeg;base64,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",
         Third_Image: "data:image/jpeg;base64,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",
         Fourth_Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDo4FR1_5bYLg6V-jKOWuNk9oUMwmdvcBjfA&usqp=CAU"
       },

   },
   Services_Navbar: {
         First_Link: 'How it work',
         Second_Link: 'PestCleaner',
         Third_Link: 'Blogs',
         Fourth_Link: 'FAQs',
         Fifth_Link: 'About PestCleaning'
   },

   How_it_Work_Column: {
     heading: 'How it Works',
     How_It_Work_First_Element: {
           Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_d08fb660.jpeg',
           Text: 'Choose a Salon service',
           Sub_Text: 'Select from various salon packages & services',
       },
       How_It_Work_Second_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_899773a0.png',
        Text: 'Choose your time-slot',
        Sub_Text: 'We service from 9am-7pm',
    },
        How_It_Work_Third_Element: {
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_89c4ec40.png',
        Text: 'Relax and enjoy salon service',
        Sub_Text: 'Our Professionals will get in touch with you an hour before the Services'
    }
   },
   Professionals_Rating_Column: {
       headings : 'PestCleaner',
       Professionals_Cards_List : [
           {
               Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56b45626b637639e7eed43de/1521523493831-2ca9d8a1484b64ac8d045eb7818d27c6.jpeg',
               Name: 'Tripti Rana',
               Address: 'CR Park, New Delhi, Delhi, India',
               Commenter_Name_Alphabate: 'S',
               Commenter_Name: 'Shweta',
               Rating: '5.0',
               Comment: 'I want to give her all the compliments, Punctual, hygenic, polite, patient, well groomed, expert service and eye to details ',
               Extra_Comments: {

                    Commenter_Name_Alphabate: 'N',
                    Commenter_Name: 'Nitish',
                    Comment: 'She did a good job overall. My wife was very heppy with service'    
               },
               
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58ae9421d451ceb649f43089/1609232457477-293a6e.jpeg',   
            Name: 'Deepika Gupta',
            Address: 'Nihal Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'K',
            Commenter_Name: 'Kanika',
            Rating: '5.0',
            Comment: 'Best beauticians I have ever found perfect in her work super polite and very experienced',
            Extra_Comments:  {

                     Commenter_Name_Alphabate: 'A',
                     Commenter_Name: 'Anita',
                     Comment: 'Deepika Was hygenic, well groomed and she was really particular in giving a eye to each detail'    
                },
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/56e913631a6caa5d3bd63392/1529904572825-48ffbd8125b5cfa09404db7446d74fe6.jpeg',   
            Name: 'Pooja Kumari',
            Address: 'Neb sarai, Block J, Saket, New Delhi, Delhi, India',
            Commenter_Name_Alphabate: 'D',
            Commenter_Name: 'Divyanshi',
            Rating: '5.0',
            Comment: 'Very friendly, understanding and knowledgeable service. Loved it',
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'P',
                    Commenter_Name: 'Preksha',
                    Comment: 'Pooja did an excellent job.. loved her service'
                }
             
           },
           {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5a82b5c602614b5f007781aa/1536661908268-fae31dcd7c9cdb624c4e6a8d5e775b12.jpeg',   
            Name: 'Soni Srivastava',
            Address: 'Dwarka, Delhi, India',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/584fa25dd3269aee2c5c681b/1517894439202-74cb860b6ca0d57e8b1f36f4083e9089.png',   
            Name: 'Sandhya Sharma',
            Address: '3rd floor, JP House, Plot No. 172 Lane No. 2, Westend MArg ',
            Commenter_Name_Alphabate: 'S',
            Commenter_Name: 'Seema',
            Rating: '5.0',
            Comment: 'The beautician is very nice having very good experence but the product are very bad after using it today I am facing a heat rashes issue in all over the body where the product was used even in a waxing or facial package' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'V',
                    Commenter_Name: 'Vinita',
                    Comment: 'Sani in the bestest beautician i hv ever met. I have been using urban clap since so long but she made me' +
                    'realize how much relaxation one can get thru these services. she put her best effort i luv her dedication &' +
                    'hard work. M fan of her. I would advise everybody to try her service n u will never b disappointed.',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/568fb00f4e81d99c35b4bd51/1538118244891-6091599123fddd241b02b11366b95bf8.jpeg',   
            Name: 'Pooja Chauhan',
            Address: 'Budh Vihar Phase I, Budh Vihar, Delhi, India',
            Commenter_Name_Alphabate: 'R',
            Commenter_Name: 'Revanshi',
            Rating: '5.0',
            Comment: 'I want ms.Pooja Chauhan again as my service expert next time too. Great service.' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
            Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/58b5331e455dc84937b40ce0/1530073428870-b75256f2246d56c432c21ed9d14e044d.jpeg',   
            Name: 'Sanju Suryavanshi',
            Address: 'Naraina Village, Naraina, Delhi, India',
            Commenter_Name_Alphabate: 'A',
            Commenter_Name: 'Avni',
            Rating: '5.0',
            Comment: 'She was really superb at her work... PainLess Wax..' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'T',
                    Commenter_Name: 'Tuhin',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        },
        {
        
        Image: 'https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5b879900519a69220036eb13/1535691152402-f6eb392710af7e289b36d08a44a84b6a.jpeg',   
            Name: 'Alka kapoor',
            Address: 'Sant Nagar, Burari, Delhi, India',
            Commenter_Name_Alphabate: 'H',
            Commenter_Name: 'Harpreet',
            Rating: '5.0',
            Comment: 'Good work and patient technician m. But Alka kapoor didn,t provide wax enough for a plus size person, also the aporn for waxing was very small. ' ,
            Extra_Comments:  {

                    Commenter_Name_Alphabate: 'S',
                    Commenter_Name: 'Sudha',
                    Comment: 'Excellent service and on time and very good at her service and takes case lot',
            
           }
        }
       ]

   },







//creating also lookes and  images carasou
Also_Looked_At_Services : {
    heading: 'People also lookes At',
    link_items_list: [
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_bc824070.jpeg',
            text_lable: 'Massage Therapists At Home For Women',
            link:'',
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_3c671dc0.jpeg',
            text_lable: 'Microwave Repair Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_a91b73d0.jpeg',
            text_lable: 'Electricians',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/home_screen/categories/Home-cleaning.jpg',
            text_lable: 'Home Cleaning Service Professionals',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_f5a01e90.jpeg',
            text_lable: 'Disinfection Service',
            link: ''
        },
        {
            image: 'https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/categories/category_v2/category_8d9f2900.png',
            text_lable: 'Beauty Service Professionals',
            link: ''
        }
    ]
},
 













   //creating services text names for services near me

   Related_Services_Column: {
     heading: 'Popular Services Near You',
     links:   [
       {link: 'Electricians'},
       {link: 'Microwave Repair'},
       {link: 'Cleaning Services'},
       {link: 'Salons'},
       {link:'Spa'}
    ],

   },


   
   Related_Services_Blogs_heading : {
       heading:'Popular Blog posts on Beauty'
   },

   Related_Services_Blogs_Carasoul : [
       {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/02/14180910/multani-mitti-face-mask-.jpg',
        textlable: 'Multani Mitti Packs: Everything About the Magic Mud',
        link: 'https://blog.urbancompany.com/beauty/multani-mitti-face-packs/'
        },

        {
        image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/30163947/rose-water-for-dry-skin.jpg',
        textlable: 'Miracles Happen When You Use Rose Water for Dry Skin!',
        link: 'https://blog.urbancompany.com/beauty/rose-water-for-dry-skin/'},

        {
             image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/21190929/Rose-Water-for-Hair.jpg',
             textlable: '5 Reasons Why You Should Use Rose Water for Hair',
             link:'https://blog.urbancompany.com/beauty/rose-water-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/18153055/Threading-Do-and-Dont.jpg',
            textlable: 'What to Do (and Not Do) After a Salon Visit',
            link:'https://blog.urbancompany.com/beauty/dos-donts-salon-visit/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/01/11145102/rose-water-for-skin-feature-image.jpg',
            textlable: 'Best Ways to Use Rose Water for Skin',
            link: 'https://blog.urbancompany.com/beauty/rose-water-for-skin/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/12/25174046/apple-cider-hero1.png',
            textlable: 'Apple Cider Vinegar for Hair: Why Use It and How (Part 2)',
            link: 'https://blog.urbancompany.com/beauty/apple-cider-vinegar-for-hair/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/06134012/lavender-1.png',
            textlable: 'How to Use Lavender Oil for Hair Growth & More',
            link: 'https://blog.urbancompany.com/beauty/lavender-oil-for-hair-growth/'
        },

        {
            image: 'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/11/25182257/new.jpg',
            textlable: 'Cocoa Butter Uses for Skin and Hair (DIY Recipes Included!)',
            link: 'https://blog.urbancompany.com/beauty/cocoa-butter-uses/'
        }
   ],








//creating object for latest customer reviews
    Latest_Customer_Reviews_Average_Column: {
        heading: 'Latest customer reviews',
        sub_heading: 'of Beauty Service Professionals in New Delhi',
        rating: '4.8',
        number_of_reviews: 'based on 789,789 reviews',
        view_more_comment: 'https://www.urbancompany.com/customer_reviews/delhi-ncr-salon-at-home'
    }
,










   

  //creating questions list for service page 

  Question_And_Answer: [
      
    {
       question: 'What are the different spa treatemnt for women you have ?',
        
    },


    {
       question: 'What are the add ons I can opt for if i book a spa for women at home?',
            
    },
       
    {
       question: 'How regularly should I get a spa for women treatment done?',
            
    },

    {
        question: 'Will there be a female or a male therapist?'

    },

    {
        question: 'Should I tell anyone about the allergies or medical conditions I have?',
    },
     
    {
        question: 'What should I do before a spa treatment?',
    },

    {
        question: 'Do I need to take  a bath after the spa at home treatment ?',
    },

    {
        question: "Can I use my cell phone during a spa at home treatment?",
       
    },

    {
        question: 'What should I wear for the spa for women?',
    }, 

    {
        question: 'Should I avoid spa for women at home If I am pregnant ?',
    },

    {
        question: 'I just got waxing done. Can I book a spa at home the same day ?',
    },

    {
        question: 'Can I gift a spa to a friend?',
    },

    {
        question: 'What is the minimum amount I can book for a spa for women at home service?',
    },

    {
        question: 'Will the therapist clean my house after a spa at home treatment?',
    },

    {
       question: 'What they actually do in spa service?',
    },
    {
        question: 'How to rate spa treatment?',
    }
]
,






    
    




    //creating state object for most asked questions and answer

   Modal_Question_And_Answer: {
      
       First_Element_Of_Question_Modal : {
           question: 'What are the different spa treatemnt for women you have ?',
             answer: 'Urban Company offers a lot of options that specifically cater to your needs. Here are some spa treatments that we offer' +
             'Aromatherapy Massage- The pressure intensity is low and it specifically helps in relaxing the body and calming the mind' +
             'Swedish Massage- The pressure intensity is medium and it helps in muscle relaxation and stress relaxation' + 
             'Thai Massage- - The pressure intensity is high and it helps boosting your energy, improves flexibility and relaxation of muscles' +
             'Deep Tissue Massage- The pressure intensity is high. It is great of pain relieving and easing chronic muscle tensions' + 
             'Body Scrub Massage- The pressure intensity is low and it helps in getting a youthful, vibrant and hydrated skin.'
        },


       Second_Element_Of_Question_Modal: {
                  question: 'What are the add ons I can opt for if i book a spa for women at home?',
                  answer: 'Apart from the spa treatments, Urban Company offers you a host of add ons that you can book. Whether it is a part of a package you choose (and save money) or alacarte:' +
                  'Face massage- A 20 minute face massage with low to medium intensity will leave your face glowing with improved blood circulation' +
                  'Head &amp; shoulder massage- A 20 minute massage with medium intensity will relieve you of headaches and any upper body tension' +
                  'Foot reflexology- A 20 minute massage with low intensity relieves stress and treats imbalances of organs connected to the feet' +
                  'Hand reflexology- A 20 minute massage with high intensity relieves stress and treats imbalances of organs connected to the hands'
        },
           
        Third_Element_Of_Question_Modal: {
                 question: 'How regularly should I get a spa for women treatment done?',
                 answer: 'The regularity of your spa treatments depends on many factors such as physical, emotional stress along with your budget.' + 
                 'You will feel the benefits after getting the treatment regularly. A spa once in a year or once in a while doesn’t really help.' +
                 ' Get a monthly massage to stay stress free and reap the many benefits that a spa offers.' +
                 'With the Urban Company wellness membership, you can get attractive discounts on your spa treatments!'
        },

        Fourth_Element_Of_Question_Modal: {
            question: 'Will there be a female or a male therapist?',
            answer: 'We only have trained and experienced female therapists.' +
             'Also as of now, we only offer spa treatments for women.'

        },

        Fifth_Element_Of_Question_Modal: {
                 question: 'Should I tell anyone about the allergies or medical conditions I have?',
                 answer: 'Yes. We recommend you inform the service professional about the same before you confirm the appointment. However, there no difference in charges and you will be charged as per our price points.'
        },
         
        Sixth_Element_Of_Question_Modal :{
            question: 'What should I do before a spa treatment?',
            answer: 'Yes. If you communicate with a therapist, the expert will be able to advice you better on the treatment and the pressure you should pick for the spa treatment.'
        },

        Seventh_Element_Of_Question_Modal: {
            question: 'Do I need to take  a bath after the spa at home treatment ?',
            answer: 'A spa treatment is designed to relax you. Here are some things you can do that can help you get the maximum out of a treatment at home:' +
            'Go low on caffeine' +
            'Try not to have a heavy meal before a spa treatment' +
            'Stretch a bit and get comfortable' +
            'Communicate with your therapist and let them know if the pressure is right'
        },

        Eighth_Element_Of_Question_Modal: {
            question: "Can I use my cell phone during a spa at home treatment?",
            answer: 'You certainly can, but we advise you do not. Getting a spa is' +
            ' to relax your senses and a cellphone will always keep you preoccupied.' + 
            'It is good to keep it aside while you are getting a therapeutic session done.'
        },

        Nineth_Element_Of_Question_Modal: {
            question: 'What should I wear for the spa for women?',
            answer: 'You do not have to worry about what to wear during a session. Our experts get every possible equipment needed for a relaxing spa, including what you can wear. The wearable gown is exclusively made available for clients and is not reused.'
        }, 

        Tenth_Element_Of_Question_Modal :{
            question: 'Should I avoid spa for women at home If I am pregnant ?',
            answer: 'If you are in your first trimester, it is advisable to not get a spa. Towards the later part of your pregnancy a spa can actually help. We advise consulting the therapist on what treatment would best work for you.'
        },

        Eleventh_Element_Of_Question_Modal :{
            question: 'I just got waxing done. Can I book a spa at home the same day ?' ,
            answer: 'Your hair follicles open up after you get waxing done. It is best to' +
             'avoid contact with excess moisture right after getting waxing done. Also if you have a sensitive skin, it may cause redness (and swelling) post waxing. Wait at east 24 hours to get a massage done.'
        },

        Twelth_Element_Of_Question_Modal: {
            question: 'Can I gift a spa to a friend?',
            answer: 'With Urban Company’s “Gift a Spa” service, you can book a spa for a friend or a loved one and gift them a day of pampering. Just log on to the app to find the service.'
        },

        Thirteenth_Element_Of_Question_Modal: {
            question: 'What is the minimum amount I can book for a spa for women at home service?',
            answer: 'The minimum booking amount for a spa at home service is Rs.999.'
        },

         Fourteenth_Element_Of_Question_Modal: {
            question: 'Will the therapist clean my house after a spa at home treatment?',
            answer: 'You can sit back and relax, for the therapist will clean up after every spa appointment and leave your home exactly the way it was.'
        },

        Fifteenth_Element_Of_Question_Modal: {
           question: 'What they actually do in spa service?',
           answer: 'Give you the time of your life.'
        },
        Sixteenth_Element_Of_Question_Modal:  {
            question: 'How to rate spa treatment?',
            answer: 'Our salon professionals use the best equipment which is sterile before use. They also ensure minimal dirt and clean up after they have worked their magic. Your home is definitely a safer and a cleaner place than any salon near your home (or anywhere for that matter).'
        }
   }



}



