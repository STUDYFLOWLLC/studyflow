import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorsOnCoursesCreateManyInput } from "../../../inputs/ProfessorsOnCoursesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProfessorsOnCoursesArgs {
  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesCreateManyInput], {
    nullable: false
  })
  data!: ProfessorsOnCoursesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
