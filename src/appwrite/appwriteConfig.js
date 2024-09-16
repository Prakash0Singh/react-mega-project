import config from '../config/config';
import { Client, Account, ID,Databases,Storage,Query } from "appwrite";

export class Service{

    client =new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID);

        this.databases=new Databases(this.client);
        this.bucket= new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost (slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            )
        } catch (error) {
            throw error;
        }
    }
    
    async deletePost (slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
            )
            return true
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
            )
        } catch (error) {
            throw error;
            
        }
    }

    async getAllPosts(queries=[Query.equal('status','active')]){
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries,
            )
        }
        catch(error){
            throw error;
        }
    }

    //File Upload Services

    async uploadFile(file){
        try {
           return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique,
                file,
           )
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileId,
            )
            return true;
        } catch (error) {
            throw error;
        }
    }

    async getFilePreview(fileId){
        try {
            return await this.bucket.getFilePreview(
                config.appwriteBucketID,
                fileId
            )
        } catch (error) {
            throw error;
        }
    }


}

const service=new Service

export default service