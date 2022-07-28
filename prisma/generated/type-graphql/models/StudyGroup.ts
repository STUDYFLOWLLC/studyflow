import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { UserOnStudyGroup } from "../models/UserOnStudyGroup";
import { StudyGroupCount } from "../resolvers/outputs/StudyGroupCount";

@TypeGraphQL.ObjectType("StudyGroup", {
  isAbstract: true
})
export class StudyGroup {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  StudyGroupID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  FK_User?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FK_UserID!: number;

  FK_UserOnStudyGroup?: UserOnStudyGroup[];

  @TypeGraphQL.Field(_type => StudyGroupCount, {
    nullable: true
  })
  _count?: StudyGroupCount | null;
}
