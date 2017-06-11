using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace NWT4
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
          //  var json = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
          //  json.SerializerSettings.PreserveReferencesHandling =
          //      Newtonsoft.Json.PreserveReferencesHandling.All;
           GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
           GlobalConfiguration.Configuration.Formatters.Remove(GlobalConfiguration.Configuration.Formatters.XmlFormatter);

            GlobalConfiguration.Configure(WebApiConfig.Register);
            
        }
    }
}
