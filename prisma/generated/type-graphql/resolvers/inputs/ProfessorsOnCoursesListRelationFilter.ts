import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesWhereInput } from "../inputs/ProfessorsOnCoursesWhereInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesListRelationFilter", {
  isAbstract: true
})
export class ProfessorsOnCoursesListRelationFilter {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereInput, {
    nullable: true
  })
  every?: ProfessorsOnCoursesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereInput, {
    nullable: true
  })
  some?: ProfessorsOnCoursesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereInput, {
    nullable: true
  })
  none?: ProfessorsOnCoursesWhereInput | undefined;
}
