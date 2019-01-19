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

    this.tileDescription.push(
    "It was Semester’s Eve in spring of 2018 and I sat facing my computer nervously: Should I make the syllabus live now, or wait until we meet tomorrow? I’m guessing this is a familiar place for all instructors, but spring of 2018 was especially poignant for me because somewhere between October of 2017 and January of 2018 I threw caution to the wind to embark on a crazy composition classroom adventure: I decided we would be quilting. Like, really quilting. Fabric, needles, thread – the whole thing. I scoured the names of the 26 students who were about to become part of my experiment. Do any of these names sound like quilting names? Should I wait until they’re already trapped in the classroom on the first day to spring the quilt idea? I decided to be a benevolent quilt leader and publish. Within two hours three students had dropped. By the end of the day the roster had shifted significantly. Students dropped, panicked last minuters added, and a core of the strong (or those that didn’t bother to check) held fast. There was a low din when I entered the classroom the next day. It stopped abruptly as I started taking of my jacket and preparing. At exactly 3:00 pm I began to introduce myself and welcome everyone to the class. I hadn’t even broken into the syllabus when a hand shot up. “Yes?” I said, nervously, “I’m sorry,” said the student, “are we really going to make a quilt in this class? This is GWAR right?” “Yes,” I paused longer than I should have, “this is GWAR. And we’re making a quilt.” Excited chatter as students turned to each other in disbelief. I laughed nervously and said, “hear me out…” By the end of the two-hour class meeting everyone – myself included! - was nervous, but on board. We were doing it! It was my second semester in a tenure track position and I had never quilted anything. Ever."
    +" The idea for the quilting composition came to me during a maker session co-hosted by Sonia Arellano at the fall 2017 feminisms and rhetorics conference. Sonia presented on her research, which looked at the migrant quilt project, an inspiring social justice group that uses found materials from the bodies of desert crossers in southern Arizona’s devil’s highway to make quilts that raise awareness about the perils faced by immigrants on the southern border. I was astonished by her quilt, her research, and what the migrant quilting project was accomplishing with such a… I’ll just say it – “old lady” craft. I myself am a chicanx who was born and raised in southern new mexico, about 45 minutes from the El Paso Ciudad Juarez border. Immigration, transnationalism, and the borderlands are central to my identity, both scholarly and otherwise. But so is “making.” My dad, who raised me, is a construction worker who brought me up in a “we can either fix it or make it” household. I spent my summers and weekends framing out forms, pouring cement, hanging drywall, doing tile, and plastering. Sitting back after a day of hard labor under the hot New Mexico sun, my skin baked brown and my hands blistered or covered in plaster, drinking a coke while my dad sipped a beer and admiring our work is among my favorite memories. There is something so completely satisfying about making, and the satisfaction I feel after completing a cement patio or tiling a shower surround is the same satisfaction I feel after writing an article or engaging in other academic work. And quilting, although quite a leap from construction, presented me with a way to bridge these two epistemologies."
    +" After Sonia’s presentation, I started researching other sewing for social justice and maker projects across rhetoric and composition. I found inspiration in the syllabi of Malea Powell, Sonia Arellano, and Jennifer Sano-Franchini, and the theoretical work of bell hooks, Angela Haas, Matt Ratto and Megan Boler, Jodi Shipka, and David Sheridan, Jim Ridolfo, and Anthony Michel, who all encourage us to extend our definition of writing (and research) to include critical making. But I also turned to my own experiences for inspiration. My dad’s “fix it or make it” mentality had left a large streak of rasquachismo in me that found its way into my academic work. I’ll continue to expand on my definition of rasquachismo as I move through this writing, but the basic definition comes from Tomás Ybarra-Frausto, who theorizes rasquachismo as “an underdog perspective - a view from los de abajo. An attitude rooted in resourcefulness and adaptability yet mindful of stance and style” (5). He continues by arguing that rasquachismo is “visceral,” an “aesthetic display projecting a sort of visual biculturalism.” Rasquache is both embodied as a sensibility (visceral) and an “aesthetic,” something visible and visual. It is more than just a method for creating art, rasquache is a theory and analysis of how and why art is made (borrowing Harding’s words). A rasquache methodology, then, accounts for both the invisible and the visible by attaching sensibility and aesthetic to the work of researching, making methodology tangible both as bodily practice and visible representation of how rhetoric and composition research proceeds. I approached the quilt with a rasquache mentality, as I do most things. "
    +"Sarah Lowndes has even connected DIY projects back to rasquache, although she doesn’t name it as such, when she says, “DIY activities are often carried out using an economy of means and materials, and exhibit what could be called an aesthetic of necessity” (263)."
    +"As I continued my search on quilting and critical making, I found projects doing similar work here in the US, like the Social Justice Sewing Academy, The Migrant Quilt Project, and the awesome text Quilts and Human Rights. I started thinking about the power of textile production as social action and cultural awareness in its myriad forms, but I also started thinking about cooperative argumentation: the theoretical underpinnings for my GWAR class that encourage students to engage in ethical dialogue and deliberation as a framework for sound and egalitarian decision making. Quilting seemed to do all of that. It presented a way for students to work both individually (on their own quilt block) and as a group (to bring the whole quilt together). The work they engage in would help them make tangible the labor of research, the production of rhetorical artifacts, and see themselves as dynamic pieces of larger systems of labor, production, and audience. I also felt that my students, many of who also come from backgrounds where physical labor is livelihood, might find the same value and satisfaction in making that I do."
    +"So I hatched the plan of the quilt. As a class, we would spend all semester making a quilt.  The project would grow and change from an individual, to small group, to large group project. While we made the quilt, we’d talk about research, writing, rhetoric, social justice, advocacy, and dialogue and deliberation."
    +"But, I had a really rasquache problem, and I imagined my students would too. Remember when I told you about all of the things I grew up making? None of those were a quilt. My house was a construction house, not a sewing house. While he can maneuver a finishing trowel with finesse and precision, I can only imagine needles snapping against my dad’s thickly callused fingers while he tried to hem a pair of pants. I don’t know how to sew, I don’t own any fabric, sewing equipment, or supplies. I don’t even own an iron! To be perfectly honest when I set out I wasn’t even necessarily sure of the parts of the quilt. I was really and truly raised by a construction worker. My original syllabus and assignments expose my naivety. I refer to quilt blocks as quilt squares and I call seams margins. But, I believe in transfer, and rasquache is really all about that, too. If I can build a cuartito I can surely sew together a quilt! It's not so different really, is it?");

    this.setDetails(0, "Introduction", this.tileDescription[0]);
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
