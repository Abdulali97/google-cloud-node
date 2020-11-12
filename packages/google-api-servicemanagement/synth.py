#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""This script is used to synthesize generated parts of this library."""

import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import subprocess
import logging

logging.basicConfig(level=logging.DEBUG)

# run the gapic generator
gapic = gcp.GAPICBazel()
versions = ["v1"]
name = 'servicemanagement'
for version in versions:
  library = gapic.node_library(
  name, 
  version,
  proto_path = f'google/api/servicemanagement/{version}')
  s.copy(library, excludes=[])

# Copy common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(
    source_location='build/src', versions=["v1"], default_version="v1")
s.copy(templates, excludes=[])

node.postprocess_gapic_library()
