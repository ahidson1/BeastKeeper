using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;

namespace BeastKeeper.Web.Helpers
{
    public class ReflectionAsseblyHelper
    {
        //HACK: this is needed to get the assembly location for the project, I tried pulling it from the DataAccess side and it seems to return null unless its called from the default
        public static string GetAsseblyLocation()
        {
            var test = Assembly.GetEntryAssembly();

            if (test != null)
                return test.Location;
            else
                return "";
        }
    }
}