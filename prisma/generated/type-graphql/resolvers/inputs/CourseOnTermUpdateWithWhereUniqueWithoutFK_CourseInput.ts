import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermUpdateWithoutFK_CourseInput } from "../inputs/CourseOnTermUpdateWithoutFK_CourseInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermUpdateWithWhereUniqueWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnTermUpdateWithWhereUniqueWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateWithoutFK_CourseInput, {
    nullable: false
  })
  data!: CourseOnTermUpdateWithoutFK_CourseInput;
}
