using System;
using System.Collections.Generic;
using System.Text;
using BeastKeeper.Core.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace BeastKeeper.Web.Data
{
    public class DataService
    {
        public static List<Beast> GetBeasts()
        {
            using (var DbContext = new SQLiteDbContext())
            {
                var beasts = DbContext.Beasts.ToList();
                if (beasts.Count < 1)
                    return new List<Beast>();
                return beasts;
            }
        }

        public static Beast GetBeast(int beastId = 0)
        {
            using (var DbContext = new SQLiteDbContext())
            {
                var beast = DbContext.Beasts.Where(b => b.Id == beastId).FirstOrDefault();
                if (beastId == 0 || beast == null)
                {
                    // either we are trying to create a new beast or there is no beast by that id. we'll return an empty beast that they can add information on and save it when they save changes
                    return new Beast { Id = 0 };
                }

                var reminders = DbContext.Reminders.Where(r => r.BeastId == beastId).ToList();
                var histories = DbContext.HistoryItems.Where(r => r.BeastId == beastId).ToList();
                var photos = DbContext.Photos.Where(r => r.BeastId == beastId).ToList();
                beast.Reminders = reminders;
                beast.HistoryItems = histories;
                beast.Photos = photos;
                return beast;
            }
        }


        public static async Task<int> AddOrUpdateBeast(Beast beast)
        {
            using (var DbContext = new SQLiteDbContext())
            {
                bool newBeast = false;
                var currentBeast = DbContext.Beasts.Find(beast.Id);
                if (beast.Id == 0 || currentBeast == null)
                {
                    DbContext.Beasts.Add(beast);
                    newBeast = true;
                }
                else
                {
                    currentBeast.Name = beast.Name;
                    currentBeast.Description = beast.Description;
                    currentBeast.Species = beast.Species;
                    currentBeast.Gender = beast.Gender;
                    DbContext.Beasts.Update(currentBeast);
                }
                await DbContext.SaveChangesAsync();

                if (newBeast) return beast.Id;
                return currentBeast.Id;
            }
        }
    }
}
