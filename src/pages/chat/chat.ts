import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import * as io from 'socket.io-client';
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
    styleUrls: ['/chat/chat.scss']
})
export class ChatPage {
    @ViewChild(Content) content: Content;
    messages:any = [];
    socketHost: string = "http://localhost:3000/";
    socket:any;
    chat:any;
    username:string;
    zone:any;
    
constructor(public  navCtrl: NavController){
    
this.socket = io.connect(this.socketHost);
this.zone  = new NgZone({enableLongStackTrace: false});
this.socket.on("chat message", (msg) =>{
    this.zone.run(()=>{
        this.messages.push(msg);
        this.content.scrollToBottom();
    });
});
}
    
chatSend(v){
    let data = {
        message: v.chatText,
        username: this.username
    }
    this.socket.emit('new message', data);
    this.chat=' ';
    }
}
