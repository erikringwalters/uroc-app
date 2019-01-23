import { Injectable } from '@angular/core';
import { Tile } from './tile';
import { KeyedCollection } from 'KeyedCollection';


@Injectable({
  providedIn: 'root'
})
export class TileService {


  tiles = new KeyedCollection<Tile>();

  //Details Info properties
  tileDescription= new Array<string>();

  constructor() {
    for (let i = 0; i <= 23; i++) { // loop through tiles and assign
      //add new tile with id and image path
      let imagePath = 'https://lapstg01.blob.core.windows.net/lap04/image%20(' + i + ').jpg';
      let newTile = new Tile(i, imagePath);
      this.tiles.Add(String(i), newTile);


    }

    this.tileDescription.push(`
    It was Semester’s Eve in spring of 2018 and I sat facing my computer nervously: Should I make the syllabus live now, or wait until we meet tomorrow? I’m guessing this is a familiar place for all instructors, but spring of 2018 was especially poignant for me because somewhere between October of 2017 and January of 2018 I threw caution to the wind to embark on a crazy composition classroom adventure: I decided we would be quilting. Like, really quilting. Fabric, needles, thread – the whole thing. I scoured the names of the 26 students who were about to become part of my experiment. Do any of these names sound like quilting names? Should I wait until they’re already trapped in the classroom on the first day to spring the quilt idea? I decided to be a benevolent quilt leader and publish. Within two hours three students had dropped. By the end of the day the roster had shifted significantly. Students dropped, panicked last minuters added, and a core of the strong (or those that didn’t bother to check) held fast. There was a low din when I entered the classroom the next day. It stopped abruptly as I started taking of my jacket and preparing. At exactly 3:00 pm I began to introduce myself and welcome everyone to the class. I hadn’t even broken into the syllabus when a hand shot up. “Yes?” I said, nervously, “I’m sorry,” said the student, “are we really going to make a quilt in this class? This is GWAR right?” “Yes,” I paused longer than I should have, “this is GWAR. And we’re making a quilt.” Excited chatter as students turned to each other in disbelief. I laughed nervously and said, “hear me out…” By the end of the two-hour class meeting everyone – myself included! - was nervous, but on board. We were doing it! It was my second semester in a tenure track position and I had never quilted anything. Ever.
    The idea for the quilting composition came to me during a maker session co-hosted by Sonia Arellano at the fall 2017 feminisms and rhetorics conference. Sonia presented on her research, which looked at the migrant quilt project, an inspiring social justice group that uses found materials from the bodies of desert crossers in southern Arizona’s devil’s highway to make quilts that raise awareness about the perils faced by immigrants on the southern border. I was astonished by her quilt, her research, and what the migrant quilting project was accomplishing with such a… I’ll just say it – “old lady” craft. I myself am a chicanx who was born and raised in southern new mexico, about 45 minutes from the El Paso Ciudad Juarez border. Immigration, transnationalism, and the borderlands are central to my identity, both scholarly and otherwise. But so is “making.” My dad, who raised me, is a construction worker who brought me up in a “we can either fix it or make it” household. I spent my summers and weekends framing out forms, pouring cement, hanging drywall, doing tile, and plastering. Sitting back after a day of hard labor under the hot New Mexico sun, my skin baked brown and my hands blistered or covered in plaster, drinking a coke while my dad sipped a beer and admiring our work is among my favorite memories. There is something so completely satisfying about making, and the satisfaction I feel after completing a cement patio or tiling a shower surround is the same satisfaction I feel after writing an article or engaging in other academic work. And quilting, although quite a leap from construction, presented me with a way to bridge these two epistemologies.
    After Sonia’s presentation, I started researching other sewing for social justice and maker projects across rhetoric and composition. I found inspiration in the syllabi of Malea Powell, Sonia Arellano, and Jennifer Sano-Franchini, and the theoretical work of bell hooks, Angela Haas, Matt Ratto and Megan Boler, Jodi Shipka, and David Sheridan, Jim Ridolfo, and Anthony Michel, who all encourage us to extend our definition of writing (and research) to include critical making. But I also turned to my own experiences for inspiration. My dad’s “fix it or make it” mentality had left a large streak of rasquachismo in me that found its way into my academic work. I’ll continue to expand on my definition of rasquachismo as I move through this writing, but the basic definition comes from Tomás Ybarra-Frausto, who theorizes rasquachismo as “an underdog perspective - a view from los de abajo. An attitude rooted in resourcefulness and adaptability yet mindful of stance and style” (5). He continues by arguing that rasquachismo is “visceral,” an “aesthetic display projecting a sort of visual biculturalism.” Rasquache is both embodied as a sensibility (visceral) and an “aesthetic,” something visible and visual. It is more than just a method for creating art, rasquache is a theory and analysis of how and why art is made (borrowing Harding’s words). A rasquache methodology, then, accounts for both the invisible and the visible by attaching sensibility and aesthetic to the work of researching, making methodology tangible both as bodily practice and visible representation of how rhetoric and composition research proceeds. I approached the quilt with a rasquache mentality, as I do most things.
    Sarah Lowndes has even connected DIY projects back to rasquache, although she doesn’t name it as such, when she says, “DIY activities are often carried out using an economy of means and materials, and exhibit what could be called an aesthetic of necessity” (263).
    As I continued my search on quilting and critical making, I found projects doing similar work here in the US, like the Social Justice Sewing Academy, The Migrant Quilt Project, and the awesome text Quilts and Human Rights. I started thinking about the power of textile production as social action and cultural awareness in its myriad forms, but I also started thinking about cooperative argumentation: the theoretical underpinnings for my GWAR class that encourage students to engage in ethical dialogue and deliberation as a framework for sound and egalitarian decision making. Quilting seemed to do all of that. It presented a way for students to work both individually (on their own quilt block) and as a group (to bring the whole quilt together). The work they engage in would help them make tangible the labor of research, the production of rhetorical artifacts, and see themselves as dynamic pieces of larger systems of labor, production, and audience. I also felt that my students, many of who also come from backgrounds where physical labor is livelihood, might find the same value and satisfaction in making that I do.
    So I hatched the plan of the quilt. As a class, we would spend all semester making a quilt.  The project would grow and change from an individual, to small group, to large group project. While we made the quilt, we’d talk about research, writing, rhetoric, social justice, advocacy, and dialogue and deliberation.
    But, I had a really rasquache problem, and I imagined my students would too. Remember when I told you about all of the things I grew up making? None of those were a quilt. My house was a construction house, not a sewing house. While he can maneuver a finishing trowel with finesse and precision, I can only imagine needles snapping against my dad’s thickly callused fingers while he tried to hem a pair of pants. I don’t know how to sew, I don’t own any fabric, sewing equipment, or supplies. I don’t even own an iron! To be perfectly honest when I set out I wasn’t even necessarily sure of the parts of the quilt. I was really and truly raised by a construction worker. My original syllabus and assignments expose my naivety. I refer to quilt blocks as quilt squares and I call seams margins. But, I believe in transfer, and rasquache is really all about that, too. If I can build a cuartito I can surely sew together a quilt! It's not so different really, is it?
    `);

    this.tileDescription.push(`
      To some, a quilt is a multi-layered textile merely praised for its aesthetic. Often, its historical properties, composition and use of rhetorical strategies are overlooked and undermined components. And although to some these characteristics may go unnoticed, researchers, scholars and historians are beginning to recognize historical context in quilts and in other textiles as being essential to understand how these can perform composition. Such recognition allows for textiles to be acknowledged as technical documents and therefore, redirecting attention to the historically undermined epistemologies. Historically, textiles have been found to have a prominent and extensive presence in the lives of underrepresented communities: Wampum, Huipiles, Slaves Quilts and the AIDS memorial. American Indian communities have “employed wampum belts as hypertextual technologies – as wampum belts have extended human memories and inherited knowledges through interconnected, nonlinear designs and associative storage and retrieval methods – long before the “discovery” of “Western hypertext” (Haas 77). This positions American Indians as the “first known skilled multimedia workers and intellectuals in the Americas” (78). Moreover, huipiles which are a Guatemalan indigenous textile and a traditional garment “can reveal age, sex, status, or it can state degrees of group membership and participation in different systems of beliefs, concealing individual identities in military uniforms or religious robes” (Odland 2). If such garment is created with an intent to reveal the previously mentioned, it can be argued that the artists are authors simply using multimodal maker projects as a communication practice and all others are readers of this multimodal text. Furthermore, their work (textiles) are worthy of being considered technical documents which bring value to composition. Odland states that “because each community has developed its own style, form, pattern, and color that serve as symbols of identity and meaning, we can assume that the Maya have practiced their weaving traditions for a long time” (2). Anawalt (1981) says that the “huipil worn today by the indigenous Maya women of Guatemala has not changed substantially since the conquest.” In fact, it is “the same tunic or blouse sewn of uncut, rectangular pieces of cloth, woven to since, portrayed on ancient Maya and Aztec archaeological pots and carvings and clay figures of women, and drawings of the Codices of the conquest of Mesoamerica” (Anawalt). It is also believed that during the 19th century, quilts contained slave codes. The slave codes were intended to help the enslaved navigate through the Underground Railroad.
      In Hidden in Plain View: A Secret Story of Quilts and the Underground Railroad, author Jacqueline Tobin and coauthor Raymond G. Dobard present a theory There is no written record of such claims because oppressive circumstances faced by African Americans prevented them from being able to read and/or write (The Underground Railroad and the Secret Codes of Antebellum Slave Quilts). They present a discussion with Ozella McDaniel Williams, a quilt maker from South Carolina in which Williams “told researchers that she memorized a secret code passed down by her ancestors that was used by the quilt makers before the Civil War to offer discreet clues to slaves who were trying to escape to freedom in the North” (page #).  Tobin and Dobard “believe that particular quilt squares which showed wrenches in a particular pattern or pointed in a particular direction were hung outside of slave housing to signal other slaves it was time to gather their tools and other belongings and try to escape” (page #).  Evidence has shown textiles to be a form of expression and/or resistance against the oppressor of minority communities. There is thought-process behind creating something that embodies resistance and it requires such groups to be aware of the composition of their pieces so that it reflect its intended purpose. The lack of acceptance places underrepresented groups as being the least contributing to the field of composition and rhetoric which leads to a persistent colonial mentality that depicts the western civilization as superior. Quilting and textile art in relation to composition and rhetoric serve as method to decolonize and debunk the western narrative that attempts to silence the history and lived experiences of marginalized groups. An understanding of the presence textiles has in the lives of underrepresented groups is a counterstory to the traditional narrative and allows for an understanding of the function of textiles as technical documents as well as redirecting attention to the merit in historically undermined epistemologies.
      Projects
      Arellano (2017) explores the migrant quilt project in which she uncovers the rhetorical functions present in memorializing quilts. The quilt is crafted from clothing left behind by migrants crossing the desert. She examines this cultural production as a meaning-making practice that memorializes lives of migrants and uncovers it through counter narrative[1], the quilt humanizes and memorializes migrant lives, as well as raises awareness of the reality of human migration (Arellano). In her dissertation, she theorizes quilting as a method to argue that meaning-making provides rhetoric and composition scholars with many pedagogical tools to encourage undermined ways of knowing. In a seemingly manner, Blair and Michel’s (2007) the NAMES Project AIDS Memorial quilt memorializes the deaths of hundreds of thousands of victims of AIDS. The quilt “executes, in other words, multiple rhetorical deaths and give rise a great many others. All those are important in evaluating the legacy of this unusual commemorative monument” (595-96). Like the migrant quilt project, the AIDS memorial quilt utilizes different kinds of materials to create a panel significant or representative of the lives of the victims.
      To consider the use of such materials is of significance, it is proof of the compositional technique quilters adopt to create an effective memorial. For hooks (1990), a distinct connection between representation, rhetoric and composition, and the art of quilt making exists. For Black women, quilting was a “meditative process” requiring a special feminist critical commentary.  The oppressive economic and social circumstances “demanded exercising creative imagination in ways radically different from those of white female counterparts, especially women of privilege who had greater access to material and time” (118). The use of “leftovers” or pieces “of no value” in such projects turn back to the theme: rasquachismo.
      Rasquachismo
      Rasqauchismo is a redefined term whose definition was reversed by the Mexican and Chicano arts movement, and today describes “making the most from the least, using discarded and recycled materials, even fragments, to create a new aesthetic that is both “defiant and inventive” (Anderson). To Amalia Mesa-Bains, “in rasquachismo, the irreverent and spontaneous are employed to make the most from the least” (157).  Josh T. Franco instead agrees that “Rasquachismo is a form of customization,” but something beyond a survivalist attitude and “something done for the sake of creativity and personalization alone.” Franco’s opinion supports hooks’s claim that Black women quilted as part of a “meditative process.” These quilts were not necessarily a “survivalist attitude” but it is the inventiveness and the use of leftover material to create something completely different that is valuable. Rasquachismo “provoke[s] the accepted “superior: norms of the Anglo-American with the everyday reality of Chicano cultural practices” (Mesa-Bains 158). This is because “operating as an internally colonized community within the borders of the United States, Chicanos forged a new cultural vocabulary composed of sustaining elements of Mexican tradition and lived encounter in a hostile environment” (Mesa-Bains 159).
      Collaborative Process in Classroom
      Understanding contemporary theory in maker projects and technical communication support the claim that the collaborative process of quilting is what allows students to recognize quilts as technical documents and, therefore, realize the value they bring to composition. In Toward a Composition Made Whole, Jody Shipka describes an experience she had during a workshop. The workshop’s focus was to provide support for teachers wanting to implement pedagogies “catered to students who favored creative, hands-on approaches to instruction and were open to diverse kinds of learnings” (1). In her own classes, she “focus[ed] on tasks that invited students to experiment with alternative, hybrid, or diverse tasks of discourse” (1).  She was not too familiar with the attendee’s experiences in relation to multimodal composing so as a sample she selected a pair of pink ballet shoes. The pink ballet shoes had a transcribed research-based essay on them. Immediately after showing the sample, a teaching assistant from the history department began to ask questions like: “How is that college-level academic writing?” or “How can that possibly be rigorous?” (3). To Shipka, the importance lies in “work[ing] closely with the student over the month she spent working on the shoes – in ways that allowed [her] to see, and so to understand, the final product in relation to the complex and highly rigorous decision-making the student employed while producing [the] text (3). The questions asked by the individual are pieces of evidence to support the claim of an existing “privileging of a linear, academic essayist prose style” and one “that pre-dates the recent proliferation of electronic communicative devices” (Samuels 2007, 105). This traditional style is what discourages students from valuing their historically undermined epistemologies. The focus should be placed on the final product in relation to the decision-making process.
    `);

    this.tileDescription.push(`The quilt is classified as a multimodal text. Multimodality is a “theory [that] offers a broadly semiotic approach to analyzing most communicative forms, including spoken and written language, still and moving images, sound, music, gesture, body posture, movement and the use of space, and so on” (Bazalgette and Buckingham, 1). Multimodality texts encourages students to analyze information in a different way than traditional print texts do, since students not only have to analyze the words, but also the images. But why is it important to learn through multimodality? What does it benefit? Gunther Kress offers an explanation in terms of communication: “Communication here is multimodal: by speechat times; by gaze; through actions… Communication has happened when one of the participants has focused on some aspect of the interaction…” (6). Kress argues that communication in itself is multimodal [1]. One person speaks, the other person interprets not only the words spoken, but also the other person’s body language, their tone of voice. Learning information through multimodal texts can help students increase their communication skills.
    While multimodality theory offers students a different way to learn, it has received backlash in classrooms. When asked to use multimodal texts in classrooms, teachers are often confused because they don’t know what multimodality actually is, or they assume multimodality has something to do with just having fun and not learning (Bazalgette and Buckingham, 4). Both of these reasons are justified, since multimodal texts can also be considered television shows, movies, or even video games. Without properly knowing how these texts can benefit learning, it’s easy to see why teachers, students, and parents can be wary of the practice. However, when used correctly, multimodal texts can help with critical thinking and critical making.
    Critical making which is “positioned at the intersection of ‘scholarly’ work of thinking and the material work of making; it serves as a catalyst for design, embedded in a process of craft, material, and exploration” and “a pedagogical construct in which students explore abstract concepts through the creation of physical things” (Schwartz, 227, 229). So, critical making is both scholarly work and making something, just like the quilt is. The quilt helped us critical make. A proponent of critical making is mean-making[2]. Mean-making is “a construction of knowledge through interpretive interactions with reading and writing” (Bird, 1). Paul Duncum agrees, but also claims that it isn’t just made through reading and writing: “Meaning is made through an interaction of music, the spoken voice, sound effects, language, and pictures” (252) According to Liu, visual texts (which are multimodal texts) can help with mean-making. She states, “We live in an increasingly visual culture, images color and other non-verbal resources are no longer used mainly to entertain and illustrate, rather, they are being significant in communicating and meaning-making” (1259).
      \r
    This Feminism is Pretty Apparent
      \r
    We can tie the quilt to a methodology called apparent feminism. According to Erin Frost, “apparent feminism is a methodology that seeks to recognize and make apparent the urgent and sometimes hidden exigencies for feminist critique of contemporary technical rhetorics” (5). Although quilting is something that is usually hailed as a woman craft, we didn’t do the quilt to be labeled as feminist. However, apparent feminism “invites participation from allies who do not explicitly identify as feminist but do work that complements feminists goals” (Frost, 5). So, even though everyone who worked on the quilt might not be a feminist, they could call themselves apparent feminists, since they were allies in helping feminist goals.
    Not only was apparent feminism one of our unplanned goals, but we also, as Schwartz said, explored abstract concepts (227). We would quilt every Thursday in class, but every Tuesday was accompanied with two different texts that was associated with our course outcomes. We learned through both multimodal texts and what Bazalgette and Buckingham call “proper” texts, meaning printed and/or written texts (4). This proves that classrooms don’t have to completely give up on proper texts, but rather integrate multimodal texts with these proper texts. Students can learn from both, without taking the significance and the importance of the other.
      \r
    Let’s Get Digital
      \r
    One thing we can look at is how the quilt could be a digital archive of sorts, if you take the literal meaning of digital referring to our fingers, our digits (Haas, 84) and archive meaning, collections of data, texts, images, maps, videos and audio files (Bolick, 122). Ellen Cushman discusses decolonizing a digital archive in her article Decolonizing the Digital Archive. She states, “Overall, digital archives have changed both the processes and sites of knowledge making for composition and rhetorical scholars” (Cushman, 116). Our quilt is a digital archive in the literal sense, because it was made by our hands and it holds a collection of information. Cushman continues on to say, “as knowledge making increasingly relies on digital archives, scholars need to understand the troubled and troubling roots of archives if they’re to understand the instrumental, historical, and cultural significance of the pieces therein” (116).
    Not only is the quilt a digital archive, but it is also considered a hypertext. Farkas and Farkas explains, “Hypertext theory considers how various arrangements of nodes and links express meaning and how these arrangements are reflected in the user interface. Hypertext theory classifies these arrangements of nodes and links into various kinds of hierarchical and non-hierarchical structures, often called ‘information structures’” (123)[3] Ayers explains hypertexts as having the ability to “create capacious spaces in which users make connections and discoveries for themselves” (6).[4]  Both digital archives and hypertexts can be linked to decolonization, which is also one of our methods. Digital archives and hypertexts are visual literacies, and visual literacies don’t always have to be in English (Enoch; Leon)[5]. In fact, they might not have any writing on them at all, meaning the information is more accessible to more people.
    `);

    this.tileDescription.push(`
    Current composition pedagogy trends
    Current composition pedagogy in the classrooms are currently not catering to the change that is shifting on how modern society should allow teachers to teach and students to learn. García-Galera and Valdivia (2014) acknowledges that in recent decades, media has been embraced in English classrooms as a text for students to analyze, but modern materials  have recently shifted teachers and students from the position of a consumer to a prosumer of new media, but pedagogical practice has been relatively stalled in implementing multimodal texts for production.
    To have the access of multi-modalities in composition classes as Diaz & McKenna (2017) have said, would be recognized as beneficial, offering students the option to communicate & express their knowledge and learning abilities in multiple ways. The stalling of multimodality into the studies of composition forms a barrier around students who have continued to struggle and not benefit from current composition pedagogy standings(Standards). Bringing forth the integration of creative works in compositions would open up learning to those who have been left out because of one-dimensions or single-intelligence based teaching practices (2017).
     In the college academic field, composition is a major form of judgement, whether you are student or teacher. For students, it does not matter what their selected major is, completing a certain level of advancement for a composition or english class is mandatory in order to prove that one has the capability to handle college reading and writing literacy. NCTE addresses, “in personal, civic, and professional discourse, alphabetic, visual, and aural works are not luxuries, but essential ways of knowing” (2005).  Current college composition is not taking into consideration of their students who desire to learn in different ways. “Students today, they seem to be the ones who know something's changing-now it’s up to academics in the field of composition to figure out what exactly what that is” (Yancey, 153). For our class, that change was manifested through the creation of quilt making.
    Quilting composition

     What can quilting composition bring to students that will allow them to better succeed in their college years? Themselves? Or how they view the world around them?

    Colleges can become more supportive of teachers who follow composition pedagogies that lets students be more engaging with their work, letting them become more connected to what they are writing and creating. What would allow them to be more engaging?


    There’s a change with how the school system views what writing is and what counts as writing. Traditionally, writing has been viewed as a means of a “physical manifestation of communication” and “denotes a specific product to produce” (Newman, 2). It’s important to recognize that writing has come to be a prevalent and valued practice because of the materials that have, historically, been widely available for composition: pen and paper (2).  Writing is the most widely used form of self expression there is and the boundaries are made to seem little, and to be viewed as a means of work that can be very powerful. There’s no denying that words are one of the most powerful tools created by mankind, creating impactful and powerful documents. (Ask Leslie for reference) Still, that doesn’t inquire that other tools can not be just as powerful as communicative forms of documents as well.
    Whos writing matters?
    Teachers recognize that there is a need for change in terms of how we view composition and are susceptible to challenging the current traditions of composition pedagogy. A challenge that must be recognized when changing composition pedagogy, is that not everyone comes from the same background or started at a level of that which was recommended in order to take college composition class(es). Meaning that students are not starting at an equal level platform, especially in the field of education.  [not finished].
    Why Quilting?
    Quilting composition revises our ideas about what counts as writing, and part of building on this concept is figuring out what counts as critical making.
    For this project, quilting was used as the main subject of ‘media text’. Quilting was more than just sewing fabrics together, students were able to create something that had an impactful meaning to them called “passionate attachments”. While recognizing their passionate attachments, students were also required to read and reflect on short passages that focused on personal self worth, beliefs, and discovering their own “truth”.
    Their “truth” is what is right for them, what makes sense in their minds, and expressing these feelings in their work, in this instance, it was the combination of both quilting and writing. This combination takes place as a form of composition that is called “critical making” or “design thinking”. This form of composition goes deeper than words on paper. “Critical making is positioned at the intersection of the “scholarly” work of thinking and the material work of making; it serves as a catalyst for design, embedded in a process of craft, material, and exploration” (Schwartz, 2016), giving way to an open exchange of creativity and composition. Their focus is on being different, making a bigger impact, and creating a connection between what they write and what is their “truth”.(find article to back this up)
    `);

    this.tileDescription.push(`
    The reason I signed up for Dr. Medina-Lòpez’s spring 2018 GWAR class was for the same reason as everyone else: it’s one of those college prerequisites. It was one of those classes that no one really… [finish]
    I remember getting to class, sitting down, and seeing Dr. Medina-Lòpez walk in. She was very friendly and even joked with some of the other students. I had a good feeling about this class, but I certainly had no idea what the class would entail.
      The clock strikes noon and our professor turns on the projector to discuss the semester syllabus. She goes over terms like rhetoric and composition and cooperative argumentation, but then she says something no one expects. She says the words “cooperative quilting.” Immediately, you can feel confusion settle over the classroom. Quilting? We’re going to quilt in an HCOM class? Before any of the students… [finish]
      Each of the quilt blocks are based on all the student’s passionate attachments. Dr. Medina-Lòpez defines passionate attachments in a series of questions: “What are the ideas, beliefs, and values that you simply will not budge on? How are these influenced by your identity and upbringing? How might you advocate for your passionate attachment (2)?” When I heard the description, a few different ideas flashed into my mind, but I ultimately decided on doing my block on something I loved and something that was fun
    `);

    this.setDetails(0, `Introduction`, this.tileDescription[0]);
    this.setDetails(5, `Reimagining Composition through Textiles’ function as Technical Documents`, this.tileDescription[1])
    this.setDetails(6, `Multimodality is Critical (Making)`, this.tileDescription[2]);
    this.setDetails(9, `Quilting Pedagogy`, this.tileDescription[3]);
    this.setDetails(14, `Break the Stigma`, this.tileDescription[4]);
  }

   setDetails(id: number, title: string, details: string) {
    this.tiles.Item(String(id)).title = title;
    this.tiles.Item(String(id)).details = details;
   }

   getTile(id: number) {
    return this.tiles.Item(String(id));
   }

   getTileID(id: number) {
    return this.tiles;
   }



}
