import { server } from "./server/server";


server.listen(process.env.PORT || 3333, () => console.log(`App Rodando ${process.env.PORT || 3333}!!`));