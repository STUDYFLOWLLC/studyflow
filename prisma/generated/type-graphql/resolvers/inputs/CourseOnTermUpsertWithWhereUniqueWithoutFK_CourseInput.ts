import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateWithoutFK_CourseInput } from "../inputs/CourseOnTermCreateWithoutFK_CourseInput";
import { CourseOnTermUpdateWithoutFK_CourseInput } from "../inputs/CourseOnTermUpdateWithoutFK_CourseInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermUpsertWithWhereUniqueWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnTermUpsertWithWhereUniqueWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateWithoutFK_CourseInput, {
    nullable: false
  })
  update!: CourseOnTermUpdateWithoutFK_CourseInput;

  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutFK_CourseInput, {
    nullable: false
  })
  create!: CourseOnTermCreateWithoutFK_CourseInput;
}
