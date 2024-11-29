import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  UseGuards,
  Query,
  HttpStatus,
  ParseUUIDPipe
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dtos/create-branch.dto';
import { UpdateBranchDto } from './dtos/update-branch.dto';
import { Branch } from './models';
import { RolesGuard } from '../auth/guards';
import { Roles } from '../auth/decorators';
import { UserRole } from '@prisma/client';
import { QueryBranchesDto } from './dtos/query-branches.dto';
import { BranchesPaginationResultDto } from './dtos/branches-pagination-result.dto';

@ApiTags('Branches')
@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Create a new branch' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Branch has been successfully created.',
    type: Branch,
  })
  @ApiResponse({ 
    status: HttpStatus.BAD_REQUEST, 
    description: 'Invalid input data.' 
  })
  @ApiResponse({ 
    status: HttpStatus.UNAUTHORIZED, 
    description: 'Unauthorized.' 
  })
  create(@Body() createBranchDto: CreateBranchDto): Promise<Branch> {
    return this.branchService.create(createBranchDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all branches with pagination and filters' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns paginated branches list',
    type: BranchesPaginationResultDto,
  })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  @ApiQuery({ name: 'filters', required: false, type: 'string' })
  @ApiQuery({ name: 'sort', required: false, type: 'string' })
  async findMany(@Query() query: QueryBranchesDto) {
    const { page, pageSize, filters, sort } = query;
    return this.branchService.findMany(
      { page, pageSize },
      filters,
      sort,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get branch by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns a branch',
    type: Branch,
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND, 
    description: 'Branch not found.' 
  })
  async findOne(@Param('id') id: string): Promise<Branch> {
    return this.branchService.findById(id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Update a branch' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Branch has been successfully updated.',
    type: Branch,
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND, 
    description: 'Branch not found.' 
  })
  @ApiResponse({ 
    status: HttpStatus.UNAUTHORIZED, 
    description: 'Unauthorized.' 
  })
  async update(
    @Param('id') id: string,
    @Body() updateBranchDto: UpdateBranchDto,
  ): Promise<Branch> {
    return this.branchService.update(id, updateBranchDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete a branch' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Branch has been successfully deleted.',
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND, 
    description: 'Branch not found.' 
  })
  @ApiResponse({ 
    status: HttpStatus.CONFLICT, 
    description: 'Cannot delete branch with active bookings.' 
  })
  @ApiResponse({ 
    status: HttpStatus.UNAUTHORIZED, 
    description: 'Unauthorized.' 
  })
  async remove(@Param('id') id: string): Promise<void> {
    await this.branchService.remove(id);
  }
}
