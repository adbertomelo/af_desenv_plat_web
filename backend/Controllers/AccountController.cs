using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]

    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserService _userService;
        public AccountController(UserService userSerive)
        {
            _userService = userSerive;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(UserLogin userLogin)
        {
            User? user = await _userService.GetByLoginAsync(userLogin.Email);

            string errorMessage = "Email ou senha inválidos";

            if (user == null)
            {
                return NotFound(errorMessage);
            }
            else
            {
                if (userLogin.Password == user.Password)
                {
                    return Ok(user);
                }
                else
                {
                    return BadRequest(errorMessage);
                }
            }

        }
    }
}
