#include "crow.h"
#include <crow/middlewares/cors.h>

using namespace std;

void zipDirectory(string name, string directoryPath);


int main(){
    crow::App<crow::CORSHandler> app;
    auto& cors = app.get_middleware<crow::CORSHandler>();

    cors
      .global()
        .headers("X-Custom-Header", "Access-Control-Allow-Origin")
        .methods("POST"_method, "GET"_method)
      .prefix("/cors")
        .origin("example.com")
      .prefix("/nocors")
        .ignore();



    CROW_ROUTE(app, "/")([](){
        return "Server Running.";
    });


    CROW_ROUTE(app, "/update/<string>/<string>/<string>/<string>")([&database](string oldName, string newName, string path, string type){

        return crow::response(400, "Something unexpected happened.");
    });


    app.port(8000).multithreaded().run();
    return 0;
}

void zipDirectory(string name, string directoryPath)
{
    int lastSlashIndex = directoryPath.find_last_of("/");
    if (lastSlashIndex != string::npos) {
        directoryPath.erase(lastSlashIndex);
    }
    string command = "cd " + directoryPath + " && zip -r " + name + ".zip " + name;
    system(command.c_str());
}