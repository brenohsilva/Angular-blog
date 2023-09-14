import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor( private route:ActivatedRoute ) { 
    
  }
   photocover: string = ''
   contentTitle: string = ''
   contentDescription: string = ''
   notice: string | undefined = ''
   private id:string | null = "0"

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent( id: string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photocover = result.photo
    this.notice = result.notice
    
  
  }

}
