"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setBaseViewsDir((0, path_1.join)(__dirname, '../', 'views'));
    app.engine('hbs', expressHbs({
        layoutsDir: (0, path_1.join)(__dirname, '../', 'views/layouts'),
        defaultLayout: 'layout',
        extname: 'hbs',
    }));
    hbs.registerPartials((0, path_1.join)(__dirname, '../', '/views/partials'));
    app.setViewEngine('hbs');
    await app.listen(3000);
    console.log('start server localhost:3000');
}
bootstrap();
//# sourceMappingURL=main.js.map