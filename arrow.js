const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
      return this.members.map( (member) => `${member} is on team ${this.teamName}`);
    }
  };
  
  team.teamSummary()