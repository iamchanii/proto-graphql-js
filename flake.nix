{
  description = "";

  inputs = {
    nixpkgs.url = "git+https://github.com/NixOS/nixpkgs?shallow=1&ref=nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs =  import nixpkgs {
          system = "${system}";
          config.allowUnfree = true;
        };

        deps = with pkgs; [
          buf
          protobuf_28
        ];
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = deps;
        };
      }
    );
}
