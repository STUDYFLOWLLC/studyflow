import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateManyFK_CourseInput } from "../inputs/ProfessorCreateManyFK_CourseInput";

@TypeGraphQL.InputType("ProfessorCreateManyFK_CourseInputEnvelope", {
  isAbstract: true
})
export class ProfessorCreateManyFK_CourseInputEnvelope {
  @TypeGraphQL.Field(_type => [ProfessorCreateManyFK_CourseInput], {
    nullable: false
  })
  data!: ProfessorCreateManyFK_CourseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
