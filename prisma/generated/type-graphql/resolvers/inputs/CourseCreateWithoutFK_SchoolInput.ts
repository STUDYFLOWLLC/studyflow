import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateNestedManyWithoutFK_CourseInput } from "../inputs/CourseOnTermCreateNestedManyWithoutFK_CourseInput";
import { ProfessorsOnCoursesCreateNestedManyWithoutFK_CourseInput } from "../inputs/ProfessorsOnCoursesCreateNestedManyWithoutFK_CourseInput";

@TypeGraphQL.InputType("CourseCreateWithoutFK_SchoolInput", {
  isAbstract: true
})
export class CourseCreateWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCreateNestedManyWithoutFK_CourseInput, {
    nullable: true
  })
  FK_Professors?: ProfessorsOnCoursesCreateNestedManyWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateNestedManyWithoutFK_CourseInput, {
    nullable: true
  })
  FK_TermsOnCourse?: CourseOnTermCreateNestedManyWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  IsOfficial?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;
}
