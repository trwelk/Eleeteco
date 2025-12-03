# Post_Installation_Object Safety Scanner

This tool scans `.plsql` files to find `Post_Installation_Object` procedures that are missing the `SAFE_FOR_ONLINE_DEPLOYMENT` comment.

## What It Does

Scans all `.plsql` files in `C:\work\ifs-applications\workspace` and identifies procedures like this:

```sql
PROCEDURE Post_Installation_Object
IS
BEGIN
   Post_Installation_Object___;   
END Post_Installation_Object;
```

That are **MISSING** the required safety comment:

```sql
-- SAFE_FOR_ONLINE_DEPLOYMENT(2025-08-01, kgnalk, SAFE_TO_RERUN_AS_THIS_CREATES_IFSINFO_VIEWS)
PROCEDURE Post_Installation_Object
IS
BEGIN
   Post_Installation_Object___;   
END Post_Installation_Object;
```

## Installation

**Requirements:** Python 3.6 or higher

1. Ensure Python is installed:
   ```cmd
   python --version
   ```

2. No additional packages needed (uses standard library only)

## Usage

### Option 1: Run with Batch File (Easiest)
```cmd
run_scan.bat
```

### Option 2: Run Python Script Directly

**Full version (with detailed output):**
```cmd
python scan_post_installation_procedures.py
```

**Simple version (quick results):**
```cmd
python scan_post_installation_simple.py
```

## Output

### Console Output
```
================================================================================
Post_Installation_Object Safety Scanner
================================================================================

Scanning directory: C:\work\ifs-applications\workspace
================================================================================
Found 1234 .plsql files

Scanning files for Post_Installation_Object procedures...
--------------------------------------------------------------------------------

================================================================================
RESULTS
================================================================================
Total .plsql files scanned: 1234
Total Post_Installation_Object procedures found: 56
  - WITH SAFE_FOR_ONLINE_DEPLOYMENT comment: 45
  - WITHOUT SAFE_FOR_ONLINE_DEPLOYMENT comment: 11

================================================================================
⚠️  PROCEDURES WITHOUT SAFE_FOR_ONLINE_DEPLOYMENT COMMENT
================================================================================

1. File: database\module\install\post_installation.plsql
   Line: 123
   Path: C:\work\ifs-applications\workspace\database\module\install\post_installation.plsql

   Context:
   -- Other comments here
   PROCEDURE Post_Installation_Object
   IS
   BEGIN
      Post_Installation_Object___;
   END Post_Installation_Object;

--------------------------------------------------------------------------------
```

### Generated Files

1. **`post_installation_safety_report.txt`** - Full detailed report
2. **`unsafe_procedures.csv`** - CSV file with unsafe procedures (for Excel)

## Configuration

To change the scan directory, edit the script:

```python
# In scan_post_installation_procedures.py or scan_post_installation_simple.py
WORKSPACE_PATH = r"C:\work\ifs-applications\workspace"  # Change this path
```

## Features

✅ Recursively scans all subdirectories  
✅ Handles encoding errors gracefully  
✅ Shows file path and line number  
✅ Displays context (lines before/after procedure)  
✅ Generates detailed report file  
✅ Exports to CSV for easy sharing  
✅ Colored console output (in full version)  

## Troubleshooting

### "Path does not exist" error
- Verify the workspace path exists: `C:\work\ifs-applications\workspace`
- Update the `WORKSPACE_PATH` variable in the script

### "Python not found" error
- Install Python from https://www.python.org/
- Make sure Python is added to PATH during installation

### No procedures found
- Check if `.plsql` files exist in the workspace
- Verify procedure naming (must be exactly `Post_Installation_Object`)

## Script Versions

### `scan_post_installation_procedures.py` (Full Version)
- Detailed output with context
- Interactive prompts
- Comprehensive reporting
- ~200 lines

### `scan_post_installation_simple.py` (Simple Version)
- Quick results
- No interaction needed
- CSV export only
- ~60 lines

Choose based on your needs!

## Example Fix

If a procedure is flagged, add this comment above it:

```sql
-- SAFE_FOR_ONLINE_DEPLOYMENT(YYYY-MM-DD, username, REASON_FOR_SAFETY)
PROCEDURE Post_Installation_Object
IS
BEGIN
   Post_Installation_Object___;   
END Post_Installation_Object;
```

Where:
- `YYYY-MM-DD` = Date
- `username` = Your IFS username
- `REASON_FOR_SAFETY` = Brief reason (e.g., "IDEMPOTENT_OPERATION", "CREATES_IF_NOT_EXISTS")

## Contact

For issues or questions, contact the development team.








