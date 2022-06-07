import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateManyFK_CourseInput } from "../inputs/CourseOnTermCreateManyFK_CourseInput";

@TypeGraphQL.InputType("CourseOnTermCreateManyFK_CourseInputEnvelope", {
  isAbstract: true
})
export class CourseOnTermCreateManyFK_CourseInputEnvelope {
  @TypeGraphQL.Field(_type => [CourseOnTermCreateManyFK_CourseInput], {
    nullable: false
  })
  data!: CourseOnTermCreateManyFK_CourseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
