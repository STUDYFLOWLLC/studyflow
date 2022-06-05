import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateManyFK_ProfessorInput } from "../inputs/CourseCreateManyFK_ProfessorInput";

@TypeGraphQL.InputType("CourseCreateManyFK_ProfessorInputEnvelope", {
  isAbstract: true
})
export class CourseCreateManyFK_ProfessorInputEnvelope {
  @TypeGraphQL.Field(_type => [CourseCreateManyFK_ProfessorInput], {
    nullable: false
  })
  data!: CourseCreateManyFK_ProfessorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
