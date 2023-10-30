using CWT.WEB.API.Data.Entities;
using System;

namespace CWT.WEB.API.Data.Repositories
{
    public interface IInviteRepository 
    {
        public Invite GetInvite(Guid id);
    }

    public class InviteRepository : IInviteRepository 
    {
        public Invite GetInvite(Guid id)
        {
            // implementation of GetInvite method
            return null; // replace this with your implementation
        }
    }
}
