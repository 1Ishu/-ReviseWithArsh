use tokio::main;
use mongodb::Client;
use mongodb::error::Error;

#[main]
async fn main() -> Result<(), Error> {
  // Replace with the actual connection string you shared earlier
  let connection_string = "mongodb+srv://cluster0.drwuzqv.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=Cluster0";

  // Await the future returned by Client::with_uri_str
  let client = Client::with_uri_str(connection_string).await?;
  println!("Connected to MongoDB Atlas with X.509!");

  // Add your code to interact with the database here

  Ok(())
}
