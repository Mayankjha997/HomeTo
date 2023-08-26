import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface Message {
  text: string;
  isBot: boolean;
}


@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent {
  messages: Message[] = [];
  newMessage: string = '';

  constructor(public dialogRef: MatDialogRef<ChatBotComponent>) {}

  sendMessage() {
    if (this.newMessage.trim() === '') {
      return;
    }

    const userMessage = this.newMessage;
    this.messages.push({ text: userMessage, isBot: false });
    this.newMessage = '';


    setTimeout(() => {
      let botResponse = 'Hello! I am your chatbot.';

      if (userMessage.toLowerCase().includes('hello')) {
        botResponse = 'Hi there!';
      }
      else if (userMessage.toLowerCase().includes('hi')) {
        botResponse = 'Hi there!';
       } 
      else if (userMessage.toLowerCase().includes('how are you')) {
        botResponse = "I'm just a bot, but I'm here to help!";
      } else if (userMessage.toLowerCase().includes('bye')) {
        botResponse = 'Goodbye!';
      } else if (userMessage.toLowerCase().includes('what is your name')) {
        botResponse = 'I am ChatBot, your virtual assistant.';
      } else if (userMessage.toLowerCase().includes('thanks' || 'thank you')) {
        botResponse = "You're welcome!";
      }else if (userMessage.toLowerCase().includes('help')) {
        botResponse = 'How can I assist you today?';
      } else if (userMessage.toLowerCase().includes('tell me a joke')) {
        botResponse = 'Why don’t scientists trust atoms? Because they make up everything!';
      } else if (userMessage.toLowerCase().includes('stuck at payment')) {
        botResponse = 'should wait and wait for our response!';
      } else if (userMessage.toLowerCase().includes('stuck at payment')) {
        botResponse = 'should wait and wait for our response!';
      } else if (userMessage.toLowerCase().includes('home'|| 'homes' || 'house' || 'houses')) {
        botResponse = 'navigate to properties menu >> select houses';
      }else if (userMessage.toLowerCase().includes('flat'|| 'flats')) {
        botResponse = 'navigate to properties menu >> select apartments';
      }else if (userMessage.toLowerCase().includes('apartment'|| 'apartments')) {
        botResponse = 'navigate to properties menu >> select apartments';
      }else if (userMessage.toLowerCase().includes('change password')) {
        botResponse = 'navigate to profile icon >> profile >> add new password >> save';
       }else if (userMessage.toLowerCase().includes('update profile')) {
        botResponse = 'navigate to profile icon >> profile >> update details >> save';
       }else if (userMessage.toLowerCase().includes('review'||'reviews'||'feedback'||'feedbacks')) {
        botResponse = 'navigate to feedback section on home page >> click all feedback button';
       }else if (userMessage.toLowerCase().includes('all properties'||'all property'||'show property'||'show properties'||'show all')) {
        botResponse = 'navigate to properties menu >> click all properties';
       }else if (userMessage.toLowerCase().includes('stuck at payment')) {
        botResponse = 'should wait and wait for our response!';
       }else if (userMessage.toLowerCase().includes('new property'||'add property'||'add new property')) {
        botResponse = 'login as OWNER >> navigate to all properties >> click add new property >> fill form and save';
       }else if (userMessage.toLowerCase().includes('edit property'||'update property')) {
        botResponse = 'login as OWNER >> navigate to all properties >> click 3-dot menu on property card >> select EDIT >> fill form and save';
       }else if (userMessage.toLowerCase().includes('delete property'||'remove property')) {
        botResponse = 'login as OWNER >> navigate to all properties >> click 3-dot menu on property card >> select DELETE';
       }else if (userMessage.toLowerCase().includes('view property'||'property details')) {
        botResponse = 'navigate to propertes menu >> select property type >> click on view button on property card';
       }else if (userMessage.toLowerCase().includes('stuck at payment')) {
        botResponse = 'should wait and wait for our response!';
       }else {
        botResponse = 'I am sorry , i didnot understand';
      }
        this.messages.push({ text: botResponse, isBot: true });
    }, 500);
  }
}
