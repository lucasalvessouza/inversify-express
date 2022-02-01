import { injectable } from "inversify";



export interface Logger {
  sendMessage(message: string): void
}


@injectable()
export class SlackLogger implements Logger {
  sendMessage(message: string): void {
    console.log(`Message sent to slack: ${message}`)
  }
}