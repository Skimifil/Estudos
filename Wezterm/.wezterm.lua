-- Importe a biblioteca principal do Wezterm.
local wezterm = require 'wezterm'
local act = wezterm.action

-- A função de retorno de configuração.
return {
  -- Use a fonte que você já tem, que é ótima para programar.
  font = wezterm.font('JetBrainsMono-SemiBold'),
  font_size = 11,

  -- Um esquema de cores agradável para os olhos.
  color_scheme = 'Catppuccin Macchiato',

  -- Deixa o fundo um pouco transparente.
  window_background_opacity = 0.9,

  -- Defina os atalhos mais essenciais.
  keys = {
    -- Cria uma nova aba com CTRL + ALT + t.
    {key="t", mods="CTRL|ALT", action=act.SpawnTab("CurrentPaneDomain")},

    -- Navegação entre abas.
    {key="]", mods="CTRL|ALT", action=act.ActivateTabRelative(1)},
    {key="[", mods="CTRL|ALT", action=act.ActivateTabRelative(-1)},

    -- Divide o painel verticalmente.
    {key="v", mods="CTRL|ALT", action=act.SplitVertical({domain="CurrentPaneDomain"})},

    -- Divide o painel horizontalmente.
    {key="s", mods="CTRL|ALT", action=act.SplitHorizontal({domain="CurrentPaneDomain"})},

    -- Navegação entre painéis (estilo Vim).
    {key="h", mods="CTRL|ALT", action=act.ActivatePaneDirection("Left")},
    {key="j", mods="CTRL|ALT", action=act.ActivatePaneDirection("Down")},
    {key="k", mods="CTRL|ALT", action=act.ActivatePaneDirection("Up")},
    {key="l", mods="CTRL|ALT", action=act.ActivatePaneDirection("Right")},

    -- Seu atalho de conexão.
    {
      key = "1",
      mods = "CTRL|ALT",
      action = act.SpawnCommandInNewTab {
        args = { "powershell.exe", "-NoExit", "-Command", "ssh T012345[user@server]@cofre.com.br" }
      },
    },
  },
}