import discord
from discord.ext import commands

prefix = 'd.'

des = 'DevilBot Is A Mod Bot!'

client = commands.Bot(description=des, command_prefix=prefix)

@client.event
async def on_ready():
    print("[]I'm in")
    print('[] Name: {}'.format(client.user.name))
@client.command(pass_context=True)
async def Owner(ctx):
    await client.say('Owners of the bot are <@348851219621478400> & <@303286549695561729>')
@client.command(pass_context=True)
async def Commands(ctx):
    await client.say("__***1.Chanels 2.Owner 3. Invite  4.Say 5.Kick 6.Ban  7.Say***__")
@client.command(pass_context=True)
async def Channels(ctx):
    await client.say('https://www.youtube.com/channel/UCL8oJJ-P_yu5TV2QPAGA1-Q')
@client.command(pass_context=True)
async def Invite(ctx):
    await client.say('https://discordapp.com/oauth2/authorize?client_id=379244671974506496&scope=bot&permissions=1')
@client.command(pass_context = True)
async def kick(ctx, userName: discord.User):
    await client.kick(userName)
@client.command(pass_context = True)
async def ban(ctx, userName: discord.User):
    await client.ban(userName)
@client.command(pass_context=True)
async def Say(ctx, member : discord.Member = None, *, message):
    await client.send_message(member, message)

  
client.run('Mzc5MjQ0NjcxOTc0NTA2NDk2.DOnXSw.LR7HVXEAHGQHwV1BnB0ZrxL22P0')
