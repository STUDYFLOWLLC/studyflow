import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorsOnCoursesOrderByWithAggregationInput } from "../../../inputs/ProfessorsOnCoursesOrderByWithAggregationInput";
import { ProfessorsOnCoursesScalarWhereWithAggregatesInput } from "../../../inputs/ProfessorsOnCoursesScalarWhereWithAggregatesInput";
import { ProfessorsOnCoursesWhereInput } from "../../../inputs/ProfessorsOnCoursesWhereInput";
import { ProfessorsOnCoursesScalarFieldEnum } from "../../../../enums/ProfessorsOnCoursesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProfessorsOnCoursesArgs {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereInput, {
    nullable: true
  })
  where?: ProfessorsOnCoursesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProfessorsOnCoursesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"ProfessorsOnCoursesID" | "CreatedTime" | "FK_CourseID" | "FK_ProfessorID">;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProfessorsOnCoursesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
