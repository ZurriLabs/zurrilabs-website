Add-Type -AssemblyName System.Drawing

$src = 'C:\Users\Enzurri\Desktop\enzurri\ZurriLabs-Main\src\assets\LogoNav.png'
$img = [System.Drawing.Bitmap]::new($src)
$w = $img.Width
$h = $img.Height

$minX = $w; $maxX = 0; $minY = $h; $maxY = 0

for ($y = 0; $y -lt $h; $y++) {
  for ($x = 0; $x -lt $w; $x++) {
    $px = $img.GetPixel($x, $y)
    if ($px.R -lt 250 -or $px.G -lt 250 -or $px.B -lt 250) {
      if ($x -lt $minX) { $minX = $x }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }
}

$pad = 10
$minX = [Math]::Max(0, $minX - $pad)
$minY = [Math]::Max(0, $minY - $pad)
$maxX = [Math]::Min($w - 1, $maxX + $pad)
$maxY = [Math]::Min($h - 1, $maxY + $pad)

$cropW = $maxX - $minX + 1
$cropH = $maxY - $minY + 1

Write-Host "Original: ${w}x${h} -> Crop rect: ${minX},${minY} size: ${cropW}x${cropH}"

$rect    = [System.Drawing.Rectangle]::new($minX, $minY, $cropW, $cropH)
$cropped = $img.Clone($rect, $img.PixelFormat)
$dst     = 'C:\Users\Enzurri\Desktop\enzurri\ZurriLabs-Main\src\assets\LogoNavCropped.png'
$cropped.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$cropped.Dispose()
Write-Host "Saved to LogoNavCropped.png"
