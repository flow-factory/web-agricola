import * as admin from 'firebase-admin';

export default class NewsController {
    
    private db = admin.firestore();

    async add(news: any): Promise<any> {
        return await this.db.collection('news').add(news);     
    }
}