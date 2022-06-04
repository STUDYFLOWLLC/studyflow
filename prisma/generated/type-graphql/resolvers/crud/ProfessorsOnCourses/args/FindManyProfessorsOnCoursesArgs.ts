import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorsOnCoursesOrderByWithRelationInput } from "../../../inputs/ProfessorsOnCoursesOrderByWithRelationInput";
import { ProfessorsOnCoursesWhereInput } from "../../../inputs/ProfessorsOnCoursesWhereInput";
import { ProfessorsOnCoursesWhereUniqueInput } from "../../../inputs/ProfessorsOnCoursesWhereUniqueInput";
import { ProfessorsOnCoursesScalarFieldEnum } from "../../../../enums/ProfessorsOnCoursesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProfessorsOnCoursesArgs {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereInput, {
    nullable: true
  })
  where?: ProfessorsOnCoursesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProfessorsOnCoursesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProfessorsOnCoursesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"ProfessorsOnCoursesID" | "CreatedTime" | "FK_CourseID" | "FK_ProfessorID"> | undefined;
}
